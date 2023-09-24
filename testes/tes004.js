

let offToOn = () => {
    let button = "OFF";
    console.log(button)
    const oldvalue = button
    console.log(oldvalue)
    button = oldvalue === "OFF" ? "ON" : "OFF";  
    return button 
}

let onToOff = () => {
    let button = "ON"
    const oldvalue = button;
    button = oldvalue === "ON" ? "OFF" : "ON";
    return button
}

console.log(offToOn())
console.log(onToOff())