import React, {FC, useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';

import {ITv} from '../../models';
import {tvService} from '../../services';
import {TvDetails} from '../../components';

const TvDetailsPage: FC = () => {
    const [show, setShow] = useState<ITv | null>(null);

    const stateShow = useLocation().state as ITv;
    const {id} = useParams<{ id: string }>();

    useEffect(() => {
        if (stateShow) {
            setShow(stateShow);
        } else {
            if (id) {
                tvService.getById(+id).then(({data}) => setShow(data));
            }
        }
    }, [stateShow, id]);

    return (
        <div>
            {
                show && <TvDetails show={show}/>
            }
        </div>
    );
};

export {
    TvDetailsPage
};