import { useStaticQuery, graphql } from 'gatsby';

export const useDataApi = () => {
    const data = useStaticQuery(
        graphql`
            {
                portfolio {
                    projectsPages {
                        data
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
                        data
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
    const {
        data: { pl: mpDataPl, eng: mpDataEng },
        photo,
    } = mainPage;
    const {
        data: { pl: ppDataPl, eng: ppDataEng },
    } = projectsPage;
    const projectsEng = projects.map(project => ({
        ...project,
        ...{ title: project.titleEng, description: project.descriptionEng },
    }));
    return {
        photo,
        pl: {
            mainPageContent: mpDataPl.contents,
            projectPage: ppDataPl.sections,
            projects,
        },
        en: {
            mainPageContent: mpDataEng.contents,
            projectPage: ppDataEng.sections,
            projects: projectsEng,
        },
    };
};
