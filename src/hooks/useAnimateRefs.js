import {createRef, useLayoutEffect, useRef} from "react";
import s from "./useAnimateRefs.css";
import {randomChoice} from "../utils/utils";

export const useAnimateRefs = (itemsLength) => {
    // pass int - number of children that need animation
    // generate refs for intersection observer
    // return array of refs

    const itemsRefs = useRef([])
    Array.from(Array(itemsLength)).map((el, i) => (
        itemsRefs.current[i] = createRef()
    ))
    const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(s.animateFadeIn)
                observer.unobserve(entry.target) // unobserve after intersect
            }
        });
    }
    useLayoutEffect(() => {
        // set base css transition class for each ref
        const baseStyles = [s.animateBase, s.animateBaseA, s.animateBaseB]
        itemsRefs.current.forEach(el => (
            // skip if el.current is null
            el.current && el.current.classList.add(
                baseStyles[randomChoice(baseStyles.length)]
            )
        ));
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
        }
        const observer = new IntersectionObserver(handleIntersect, options)
        itemsRefs.current.forEach(el =>
            // skip if el.current is null
            el.current && observer.observe(el.current)
        )
        return () => {
            itemsRefs.current.forEach(el => {
                if (el.current) observer.unobserve(el.current)
            })
        }
    }, [])
    return itemsRefs.current
}
