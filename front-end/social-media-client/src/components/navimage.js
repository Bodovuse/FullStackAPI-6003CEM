/**
 * this allows us to wrap an image tag as a component to allow router linking
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavImage = (props) => {
    const navigate = useNavigate();
    return <img alt={props.alt} src={props.src} onClick={() => navigate(props.to)} />;
}
export default NavImage;