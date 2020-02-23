import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import ProjectCard from './ProjectCard';

const mockData = {
    status: 'PUBLISHED',
    updatedAt: '2019-12-09T09:56:54.935Z',
    createdAt: '2019-06-13T06:14:07.840Z',
    id: 'cjwu9pkv46ovc0819pynhl236',
    photo: {
        status: 'PUBLISHED',
        updatedAt: '2019-12-09T09:55:26.280Z',
        createdAt: '2019-12-09T09:55:26.280Z',
        id: 'ck3y9fnwobqfn0b32ur5txm55',
        handle: 'zvB0OaaTheMF9I3gYhmh',
        fileName: 'port.png',
        height: 299,
        width: 600,
        size: 38616,
        mimeType: 'image/png',
        title: null,
        index: null,
    },
    title: 'Portfolio - 2019',
    technologies: [
        {
            status: 'PUBLISHED',
            updatedAt: '2019-06-13T07:31:14.252Z',
            createdAt: '2019-06-13T07:02:49.302Z',
            id: 'cjwubg72uk1xw0941k5o8900z',
            handle: 'VR4zBoVdQIeK7TaF4W8f',
            fileName: '13152fe0-5dcb-11e8-811f-8348e95e0778.png',
            height: 150,
            width: 150,
            size: 12813,
            mimeType: 'image/png',
            title: 'GraphCMS',
            index: 16,
        },
        {
            status: 'PUBLISHED',
            updatedAt: '2019-06-13T07:31:21.752Z',
            createdAt: '2019-06-13T07:02:49.469Z',
            id: 'cjwubg77hk1y50941d8cvzykn',
            handle: 'kU6G7mOFQVuIqkDXGXFp',
            fileName: 'graphql.png',
            height: 150,
            width: 150,
            size: 8330,
            mimeType: 'image/png',
            title: 'GraphQL',
            index: 17,
        },
        {
            status: 'PUBLISHED',
            updatedAt: '2019-06-13T07:30:50.869Z',
            createdAt: '2019-06-13T07:02:50.289Z',
            id: 'cjwubg7u9k1yk0941pglah5rx',
            handle: '0dCCz5ETJe4ITclPYbzw',
            fileName: 'logogatsbyicon.png',
            height: 150,
            width: 150,
            size: 10266,
            mimeType: 'image/png',
            title: 'Gatsby',
            index: 15,
        },
        {
            status: 'PUBLISHED',
            updatedAt: '2019-06-13T07:31:32.528Z',
            createdAt: '2019-06-13T07:02:50.354Z',
            id: 'cjwubg7w26xzk0819l52ikvdo',
            handle: 'brX6yMqwQL6jx6OStf2J',
            fileName: 'logomark.png',
            height: 150,
            width: 150,
            size: 12073,
            mimeType: 'image/png',
            title: 'Netlify',
            index: 20,
        },
        {
            status: 'PUBLISHED',
            updatedAt: '2019-06-13T07:30:19.901Z',
            createdAt: '2019-06-13T07:02:51.061Z',
            id: 'cjwubg8fp6xzq0819vwstdqns',
            handle: 'rD2ALmPSguPAPDHWVegQ',
            fileName: 'React.js_logo-5121.png',
            height: 150,
            width: 150,
            size: 10929,
            mimeType: 'image/png',
            title: 'React',
            index: 11,
        },
        {
            status: 'PUBLISHED',
            updatedAt: '2019-06-13T07:30:32.016Z',
            createdAt: '2019-06-13T07:02:51.137Z',
            id: 'cjwubg8htkafh09101cmciohl',
            handle: 'MaYyVT8sQ26A8bKdYRFe',
            fileName: 'styled-components.png',
            height: 150,
            width: 150,
            size: 9562,
            mimeType: 'image/png',
            title: 'Styled components',
            index: 12,
        },
    ],
    description: 'Moje najciekawsze projekty w jednym miejscu.',
    gitLink: 'https://github.com/Hentuloo/Portfolio_2019',
    liveLink: null,
    index: 19,
    titleEng: 'Portfolio - 2019',
    descriptionEng: 'My most interesting projects in one place.',
};

const Wrapper = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: 100%;
    div {
        max-width: 340px;
    }
`;

storiesOf('organism/', module).add('ProjectCard', () => (
    <Wrapper>
        <ProjectCard data={mockData} />
    </Wrapper>
));
