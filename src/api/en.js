import { useStaticQuery, graphql } from 'gatsby';

export const useEnglishApi = () => {
    const data = useStaticQuery(
        graphql`
            {
                portfolio {
                    projectsPages {
                        content: contentEng
                    }
                    projectses(
                        orderBy: index_DESC
                        where: { status: PUBLISHED }
                    ) {
                        id
                        title: titleEng
                        description: descriptionEng
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
                        content: contentEng
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

    const { content: mainPageMarkdown, photo } = mainPage;
    const { content: projectPageMarkdown } = projectsPage;

    return {
        projects,
        mainPageMarkdown,
        photo,
        projectPageMarkdown,
    };
};
