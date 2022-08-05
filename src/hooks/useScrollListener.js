/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import s from '../components/NavBar/NavBar.css';
import { throttle } from '../utils/utils';

export const useScrollListener = () => {
  const [scrollData, setScrollData] = useState({ y: 0, prevY: 0 });
  const handleScroll = () => {
    setScrollData((prev) => ({ y: window.scrollY, prevY: prev.y }));
  };
  useEffect(() => {
    const throttleScroll = throttle(handleScroll, 150);
    window.addEventListener('scroll', throttleScroll);
    return () => {
      window.removeEventListener('scroll', throttleScroll);
    };
  }, []);
  return scrollData;
};

export const useNavScroll = () => {
  const scrollData = useScrollListener();
  const [navHideClass, setNavHideClass] = useState('');
  useEffect(() => {
    let hideClass = '';
    if (scrollData.y > 100 && scrollData.y - scrollData.prevY > 0) hideClass = ` ${s.navBarHide}`;
    setNavHideClass(hideClass);
  }, [scrollData]);
  return navHideClass;
};
