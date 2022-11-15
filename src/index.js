const dom = (name, props, ...children) => {
    const el = document.createElement(name);
    if(props)
    {
        Object.keys(props).forEach(key => {
            if(key === 'style') {
                    console.log(props[key]);
                    // el.style[style] = props[key][style];
                
            } else {
                el[key] = props[key];
            }
        });
    }
    if(children)
    {
        children.forEach(child => {
            if (typeof child === 'string') {
            el.appendChild(document.createTextNode(child));
            } else {
            el.appendChild(child);
            }
        });
    }
    return el;
};

document.body.appendChild(
    <div style="font-weight:bold">
        <a>bar</a>
        <b />
    </div>
);