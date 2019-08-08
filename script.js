// Avatar image display
let avatar_img_display = document.getElementById('avatar-img-display');
document.getElementById('avatar-img').onclick =
    () => avatar_img_display.style.left = '0px';
avatar_img_display.onclick =
    () => avatar_img_display.style.left = '100%';


// Set jumpers
for (let jumper of document.getElementsByClassName('jumper')) {

    if (jumper.hasAttribute('data-jump'))
        jumper.onclick = function() {
            let id = jumper.getAttribute('data-jump');
            let offset = document.getElementById(id).offsetTop;
            $('html, body').animate({
                scrollTop: offset
            }, 1500);
        }

}

// Set project images
let projects = document.getElementsByClassName('project');
let project_img_display = document.getElementById('project-img-display');

for (let project of projects) {
    let project_image = project.getElementsByTagName('img')[0];

    project_image.onclick = function() {
        let display_image = project_img_display.getElementsByTagName('img')[0];

        display_image.setAttribute('src', project_image.getAttribute('src'));
        project_img_display.style.left = '0px';
    }
}
project_img_display.onclick =
    () => project_img_display.style.left = '100%';

// Set project links
for (let project of projects) {
    let link = project.getElementsByTagName('h4')[0];

    if (link.hasAttribute('href'))
        link.onclick =
            () => window.location.href = link.getAttribute('href');
}