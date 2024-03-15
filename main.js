// Constants for filter containers and content
const content = document.getElementById('content');
const categoryButton = document.getElementById('catergory_btn');
const catergoryClassAndSubject = document.getElementById('catergory_class_and_subject');
let biology11th = document.getElementById('11th_biology')
let chemestry11th = document.getElementById('11th_chemestry')
let physic11th = document.getElementById('11th_physic')
let biology12th = document.getElementById('12th_biology')
let chemestry12th = document.getElementById('12th_chemestry')
let physic12th = document.getElementById('12th_physic')


let subjectBiologyContent11Th = document.getElementById('11th_biology_subject_content');
let subjectBiologyContent12Th = document.getElementById('12th_biology_subject_content');
let subjectPhysicContent11Th = document.getElementById('11th_physic_subject_content');
let subjectPhysicContent12Th = document.getElementById('12th_physic_subject_content');
let subjectChemestryContent11Th = document.getElementById('11th_chemestry_subject_content');
let subjectChemestryContent12Th = document.getElementById('12th_chemestry_subject_content');



categoryButton.addEventListener('click', () => {
    const isHidden = catergoryClassAndSubject.style.display === 'none' || catergoryClassAndSubject.style.display === '';
    
    if (isHidden) {
        // Show the element by toggling classes
        catergoryClassAndSubject.style.display = 'flex';
    } else {
        // Hide the element by toggling classes
        catergoryClassAndSubject.style.display = 'none';
    }
});

// Function to create a new post
function newPost(imgURL, Title, linkURL) {
    const postContainer = document.createElement('div');
    const postContainerImage = document.createElement('div');
    const postContainerTitle = document.createElement('div');
    postContainer.classList.add('post_container');
    postContainerImage.classList.add('post_container_image');
    postContainerTitle.classList.add('post_container_title');

    postContainer.append(postContainerImage);
    postContainer.append(postContainerTitle);

    content.append(postContainer);

    postContainerImage.style.backgroundImage = `url('${imgURL}')`;
    postContainerTitle.innerText = Title;

    // Check the category based on the title
    postContainer.addEventListener('click', () => {
        window.location.href = linkURL;
    });
}

// Example usage
newPost('/Biology Class 11th NEET Module - 01 | Chapter 03 Plant Kingdom Thumbnail.jpg', "Biology Class 11th NEET Module - 01 | Chapter - 03 Plant Kingdom", "/Biology Class 11th NEET Module - 01 | Chapter 03 Plant Kingdom .html");

function categoryBtnOprnContentPage(btn, page1, page2, page3, page4, page5, page6) {
    btn.addEventListener('click', () => {
        const isHidden = (
            page1.style.display === 'none' &&
            page2.style.display === 'none' &&
            page3.style.display === 'none' &&
            page4.style.display === 'none' &&
            page5.style.display === 'none' &&
            page6.style.display === 'none'
        );
        
        if (isHidden) {
            // Show the first page and hide the rest
            page1.style.display = 'flex';
            page2.style.display = 'none';
            page3.style.display = 'none';
            page4.style.display = 'none';
            page5.style.display = 'none';
            page6.style.display = 'none';
        } else {
            // Hide all pages
            page1.style.display = 'none';
            page2.style.display = 'none';
            page3.style.display = 'none';
            page4.style.display = 'none';
            page5.style.display = 'none';
            page6.style.display = 'none';
        }
    });
}

categoryBtnOprnContentPage(biology11th, subjectBiologyContent11Th, subjectPhysicContent11Th, subjectPhysicContent12Th, subjectBiologyContent12Th, subjectChemestryContent11Th, subjectChemestryContent12Th);
categoryBtnOprnContentPage(chemestry11th, subjectChemestryContent11Th, subjectPhysicContent11Th, subjectPhysicContent12Th, subjectBiologyContent12Th, subjectBiologyContent11Th, subjectChemestryContent12Th);
categoryBtnOprnContentPage(physic11th, subjectPhysicContent11Th, subjectPhysicContent12Th, subjectBiologyContent11Th, subjectBiologyContent12Th, subjectChemestryContent11Th, subjectChemestryContent12Th);
categoryBtnOprnContentPage(biology12th, subjectBiologyContent12Th, subjectPhysicContent11Th, subjectPhysicContent12Th, subjectBiologyContent11Th, subjectChemestryContent11Th, subjectChemestryContent12Th);
categoryBtnOprnContentPage(chemestry12th, subjectChemestryContent12Th, subjectPhysicContent11Th, subjectPhysicContent12Th, subjectBiologyContent11Th, subjectBiologyContent12Th, subjectChemestryContent11Th);
categoryBtnOprnContentPage(physic12th, subjectPhysicContent12Th, subjectPhysicContent11Th, subjectChemestryContent11Th, subjectBiologyContent12Th, subjectChemestryContent12Th, subjectPhysicContent11Th);
