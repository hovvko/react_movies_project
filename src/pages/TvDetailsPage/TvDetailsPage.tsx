import React, {FC, useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';

import {ITv} from '../../models';
import {TvDetails} from '../../components';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getTvShowById} from '../../redux';

const TvDetailsPage: FC = () => {
    const [show, setShow] = useState<ITv | null>(null);
    const {tvShow} = useAppSelector(state => state.tvReducer);

    const stateShow = useLocation().state as ITv;
    const {id} = useParams<{ id: string }>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) {
            dispatch(getTvShowById({id: +id}));
        }
    }, [id, dispatch]);

    useEffect(() => {
        if (stateShow) {
            setShow(stateShow);
        } else {
            setShow(tvShow);
        }
    }, [stateShow, tvShow]);

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