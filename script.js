const helloReact = () => {
    return React.createElement('h1',null,'Learning Web Development');
};
const followUP = () => {
    return React.createElement('p',null,`Welcome to the MDN learning area. This set of articles aim to guide complete 
    beginners to web development with all that they need to start coding websites.
    `);
}
const web = () => {
    return React.createElement('div', { 
        dangerouslySetInnerHTML: { 
            __html: `
                The aim of this area of MDN is not to take you from "Beginners" to "experts" but to 
                take you from "beginner" to "comfortable". From there, you should be able to start making your way, 
                <a href="https://developer.mozilla.org/en-US/docs/Web">learning from the rest of MDN</a>. and other intermediate to advanced resources that assume a lot of previous knowledge.
            `
        } 
    });
};



ReactDOM.render(React.createElement(helloReact),document.getElementById('root'));
ReactDOM.render(React.createElement(followUP),document.getElementById('follow-up'));
ReactDOM.render(React.createElement(web),document.getElementById("web"));
