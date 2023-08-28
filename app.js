const accordionContents = document.querySelectorAll(".accordion-content");

accordionContents.forEach(content => {
    const contentHeader = content.querySelector('.content-header');
    const icon = contentHeader.querySelector('i');
    const description = content.querySelector('.description');
    const title = content.querySelector('.title');
    
    contentHeader.addEventListener('click', () => {
        if (!content.classList.contains('open')) {
            closeOtherAccordionContent(content); 
        }
        content.classList.toggle('open');
        if (content.classList.contains('open')) {
            description.style.height = `${description.scrollHeight}px`;
            icon.classList.replace('fa-plus', 'fa-minus');
            title.classList.add('color');
        } else {
            description.style.height = '0';
            icon.classList.replace('fa-minus', 'fa-plus');
            title.classList.remove('color');
        }
    });
});

function closeOtherAccordionContent(openContent) {
    accordionContents.forEach(content => {
        if (content !== openContent && content.classList.contains('open')) {
            content.classList.remove('open');
            const contentIcon = content.querySelector('.content-header i');
            const contentDescription = content.querySelector('.description');
            const contentTitle = content.querySelector('.title');
            contentIcon.classList.replace('fa-minus', 'fa-plus');
            contentDescription.style.height = '0';
            contentTitle.classList.remove('color'); 
        }
    });
}
