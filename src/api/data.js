import { useStaticQuery, graphql } from 'gatsby';

export const useDataApi = () => {
    const data = useStaticQuery(
        graphql`
            {
                portfolio {
                    projectsPages {
                        content
                        contentEng
                    }
                    projectses(
                        orderBy: index_DESC
                        where: { status: PUBLISHED }
                    ) {
                        id
                        title
                        titleEng
                        description
                        descriptionEng
                        gitLink
                        liveLink
                        technologies(orderBy: index_ASC) {
                            id
                            handle
                            width
                            height
                            fileName
                            title
                        }
                        photo {
                            handle
                            width
                            height
                        }
                    }
                    mainPages {
                        content
                        contentEng
                        photo {
                            handle
                            width
                            height
                        }
                    }
                }
            }
        `,
    );
    const {
        portfolio: {
            mainPages: [mainPage],
            projectsPages: [projectsPage],
            projectses: projects,
        },
    } = data;
    const { content: mpContent, contentEng: mpContentEng, photo } = mainPage;
    const { content: ppContent, contentEng: ppContentEng } = projectsPage;
    const projectsEng = projects.map(project => ({
        ...project,
        ...{ title: project.titleEng, description: project.descriptionEng },
    }));
    return {
        photo,
        pl: {
            mainPageContent: mpContent,
            projectPage: ppContent,
            projects,
        },
        en: {
            mainPageContent: mpContentEng,
            projectPage: ppContentEng,
            projects: projectsEng,
        },
    };
};
