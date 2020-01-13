import ListGroup from 'react-bootstrap/ListGroup';

import styled from 'styled-components';

export const RepoListComponent = styled(ListGroup)`
	li {
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;
