"use strict";
// spreed operator
{
    const frind1 = ['katappa', 'vallal', 'mountain'];
    const firnd2 = ['black', 'horse', 'dew'];
    // frind1.push(...firnd2)
    const firndList = [...frind1, ...firnd2];
    console.log(firndList);
    // rest operator
    const addNumber = (...frinds) => {
        frinds.forEach((frind) => console.log(frind));
    };
    addNumber('abul', 'babul', 'kabul');
}