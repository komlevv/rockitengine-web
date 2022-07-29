import {createRef, useLayoutEffect, useRef} from "react";
import s from "./useAnimateRefs.css";
import {randomChoice} from "../utils/utils";

export const useAnimateRefs = (itemsLength) => {
    // pass int - number of children that need animation
    // generate refs for intersection observer
    // return array of refs

    // todo this should be automatic? need div + ref + childNodes, but there's none atm
    //  another option would be components array [] or HOC, but children should have unified API,
    //  each block to be animated should accept an innerRef
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
        itemsRefs.current.forEach(el => (el.current.classList.add(
            baseStyles[randomChoice(baseStyles.length)]
        )))
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
        }
        // todo this assumes that returned refs are already passed
        // to child nodes inside component tree, if any single ref is not
        // bound, this throws an error. need to implement fallback
        const observer = new IntersectionObserver(handleIntersect, options)
        itemsRefs.current.forEach(el => observer.observe(el.current))
        return () => {
            itemsRefs.current.forEach(el => {
                if (el.current) observer.unobserve(el.current)
            })
        }
    }, [])
    return itemsRefs.current
}
