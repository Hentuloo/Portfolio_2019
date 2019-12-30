import { useStaticQuery, graphql } from 'gatsby';

export const usePdfLinks = () => {
    const data = useStaticQuery(
        graphql`
            {
                portfolio {
                    mainPages {
                        pdf {
                            url
                        }
                        pdfEng {
                            url
                        }
                    }
                }
            }
        `,
    );

    const {
        portfolio: {
            mainPages: [pdfs],
        },
    } = data;

    const { pdf, pdfEng } = pdfs;

    return {
        pdf,
        pdfEng,
    };
};
