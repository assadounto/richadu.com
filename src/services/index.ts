import { db } from './firebase';
import { doc, setDoc, getDoc, updateDoc, increment, DocumentReference } from 'firebase/firestore';

// Define types for project and post data
interface ProjectData {
    name: string;
    views: number;
    likes: number;
}

interface PostData {
    title: string;
    content: string;
    views: number;
    likes: number;
}

// Function to add a new project
export const addProject = async (slug: string, projectData: ProjectData): Promise<void> => {
    try {
        await setDoc(doc(db, 'projects', slug), projectData);
        console.log('Project added with ID: ', slug);
    } catch (e) {
        console.error('Error adding project: ', e);
    }
};

// Function to update project views, creating the project if it doesn't exist
export const updateProjectViews = async (slug: string): Promise<void> => {
    const projectRef: DocumentReference = doc(db, 'projects', slug);

    try {
        const projectSnap = await getDoc(projectRef);

        if (projectSnap.exists()) {
            await updateDoc(projectRef, {
                views: increment(1)
            });
        } else {
            await setDoc(projectRef, {
                views: 1,
                likes: 0
            });
        }
        console.log('Project views updated for ID: ', slug);
    } catch (e) {
        console.error('Error updating project views: ', e);
    }
};

// Function to increment likes for a project
export const incrementProjectLikes = async (slug: string): Promise<void> => {
    const projectRef: DocumentReference = doc(db, 'projects', slug);

    try {
        await updateDoc(projectRef, {
            likes: increment(1)
        });
        console.log('Project likes incremented for ID: ', slug);
    } catch (e) {
        console.error('Error incrementing project likes: ', e);
    }
};

// Function to add a new post
export const addPost = async (slug: string, postData: PostData): Promise<void> => {
    try {
        await setDoc(doc(db, 'posts', slug), postData);
        console.log('Post added with ID: ', slug);
    } catch (e) {
        console.error('Error adding post: ', e);
    }
};

// Function to update post views, creating the post if it doesn't exist
export const updatePostViews = async (slug: string): Promise<void> => {
    const postRef: DocumentReference = doc(db, 'posts', slug);

    try {
        const postSnap = await getDoc(postRef);

        if (postSnap.exists()) {
            await updateDoc(postRef, {
                views: increment(1)
            });
        } else {
            await setDoc(postRef, {
                views: 1,
                likes: 0
            });
        }
        console.log('Post views updated for ID: ', slug);
    } catch (e) {
        console.error('Error updating post views: ', e);
    }
};

// Function to increment likes for a post
export const incrementPostLikes = async (slug: string): Promise<void> => {
    const postRef: DocumentReference = doc(db, 'posts', slug);

    try {
        await updateDoc(postRef, {
            likes: increment(1)
        });
        console.log('Post likes incremented for ID: ', slug);
    } catch (e) {
        console.error('Error incrementing post likes: ', e);
    }
};




export async function getFirebasePostData(slug: string): Promise<{ views: number; likes: number }> {
    const postRef = doc(db, 'posts', slug);
    const postSnap = await getDoc(postRef);

    if (postSnap.exists()) {
        const data = postSnap.data();
        return {
            views: data.views || 0,
            likes: data.likes || 0,
        };
    } else {
        return {
            views: 0,
            likes: 0,
        };
    }
}



export async function getFirebaseProjectData(slug: string): Promise<{ views: number; likes: number }> {
    const projectRef = doc(db, 'projects', slug);
    const projectSnap = await getDoc(projectRef);

    if (projectSnap.exists()) {
        const data = projectSnap.data();
        return {
            views: data.views || 0,
            likes: data.likes || 0,
        };
    } else {
        return {
            views: 0,
            likes: 0,
        };
    }
}
