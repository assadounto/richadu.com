import React from "react";
import { notFound } from "next/navigation";
import ProjectLayout from "@/app/ui/layout/ProjectLayout";
import { getProject } from "@/lib/projects";
import { Project } from "@/app/ui/components/Project";
import Head from "next/head";
export default async function Page({ params }: { params: { slug: string } }) {
    const project = await getProject(params.slug);
    if (!project) return notFound();
  
    
    return (
        <>
        <Head>
        <title>{project.title} | Your Portfolio</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.cover} />
        <meta property="og:url" content={`https://yourwebsite.com/projects/${project.category}/${project.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            'headline': project.title,
            'image': project.cover,
            'creator': {
              '@type': 'Person',
              'name': project.author,
            },
            'datePublished': project.date,
            'description': project.description,
            'mainEntityOfPage': {
              '@type': 'WebPage',
              '@id': `https://richadu.com/projects/${project.category}/${project.slug}`,
            },
          })}
        </script>
      </Head>
            <ProjectLayout project={project}>
                <Project>{project.body}</Project>
            </ProjectLayout>
        </>
       
    );
}
