const result = document.querySelector("#result");
const html_code = document.querySelector("#htmlEditor");
const html_suggestion = document.querySelector("#jsEditor");
const css_code = document.querySelector("#cssEditor");
const js_code = document.querySelector("#jsEditor");
const suggestion = document.querySelector("#suggestion");
const fullscreenToggle = document.querySelector("#fullscreenToggle");
const fullIcon = document.querySelector("#fullIcon");


function run(){
    localStorage.setItem("html_code", html_code.value);
    localStorage.setItem("css_code", css_code.value);
    localStorage.setItem("js_code", js_code.value);
    

    result.contentDocument.body.innerHTML = `<style>${localStorage.css_code}</style>` + localStorage.html_code;
    try {
        result.contentWindow.eval(localStorage.js_code) 
    } catch (error) {
        console.log(error);

        setTimeout(()=>{
            console.clear();
        },5000)
    }
}

function getLineNumberAndColumnIndex(textarea){
    var textLines = textarea.value.substr(0, textarea.selectionStart).split("\n");
    var currentLineNumber = textLines.length;
    var currentColumnIndex = textLines[textLines.length-1].length;
    console.log("Current Line Number "+ currentLineNumber+" Current Column Index "+currentColumnIndex );
}
html_code.addEventListener('keyup',()=> run())
css_code.addEventListener('keyup',()=> run())
js_code.addEventListener('keyup',()=> run())

// Check if there is any code saved on the local storage
if (localStorage.html_code != 'undefined') {
    html_code.value = localStorage.html_code  
}
if (localStorage.css_code != 'undefined') {
    css_code.value = localStorage.css_code
}
if (localStorage.js_code != 'undefined') {
    js_code.value = localStorage.js_code
}

window.onload = ()=> run()

const htmlTags = ["a",
    "abbr",
    "acronym",
    "address",
    "applet",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "basefont",
    "bdi",
    "bdo",
    "bgsound",
    "big",
    "blink",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "content",
    "data",
    "datalist",
    "dd",
    "decorator",
    "del",
    "details",
    "dfn",
    "dir",
    "div",
    "dl",
    "dt",
    "element",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "font",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "isindex",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "listing",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "nobr",
    "noframes",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "plaintext",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "shadow",
    "small",
    "source",
    "spacer",
    "span",
    "strike",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "tt",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "xmp"
]

// SuggestionCode

if (document.querySelector('#suggestBtn')) {
    document.querySelector('#suggestBtn').addEventListener('click',e=>{
        console.log(e);
    })
}

fullscreenToggle.addEventListener('click',()=>{
    result.classList.toggle('fullscreen');
    fullIcon.classList.toggle('fa-search-minus')
    fullIcon.classList.toggle('fa-search-plus')
    if (result.classList.contains('animate__fadeInDown')) {
        result.classList.add('animate__fadeInUp')
        result.classList.remove('animate__fadeInDown')
    }else{
        result.classList.add('animate__fadeInDown')
        result.classList.remove('animate__fadeInUp')
    }
    
    
})