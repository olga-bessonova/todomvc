const sheet = new CSSStyleSheet();
sheet.replaceSync(`:host {
    display: block;
    box-shadow: none !important;
}

.footer {
    margin: 65px auto 0;
    color: #4d4d4d;
    font-size: 11px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
    text-align: center;
}

.footer-text {
    line-height: 1;
}

.footer-link {
    color: inherit;
    text-decoration: none;
    font-weight: 400;
}

.footer-link:hover {
    text-decoration: underline;
}
`);
export default sheet;
