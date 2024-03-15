    const container = document.getElementById('container');
    let questionCounter = 1;
    let answered = false;
    let correctAnswersCount = 0;
    let incorrectAnswersCount = 0;
    const correctAudio = new Audio('correct.mp3');
    const incorrectAudio = new Audio('incorrect.mp3');
    const resultSound = new Audio('resultSound.mp3');
    const returnBtn = document.getElementById('returnBtn')
    const home = document.getElementById('homeBtn');
    
    home.addEventListener('click', function(){
        window.location.href = 'index.html'
    })
        

    
    returnBtn.addEventListener('click', function (){
        window.location.href = 'Biology Class 11th NEET Module - 01 | Chapter 03 Plant Kingdom .html'
    })
    
    
    function writeObjective(question, optionA, optionB, optionC, optionD, answer) {
        const objectiveContainer = document.createElement('div');
        const objectiveContainerQuestion = document.createElement('div');
        const objectiveContainerOptions = document.createElement('div');
        const optionAElement = document.createElement('div');
        const optionBElement = document.createElement('div');
        const optionCElement = document.createElement('div');
        const optionDElement = document.createElement('div');

        objectiveContainer.classList.add('objective_container');
        objectiveContainerQuestion.classList.add('objective_container_question');
        objectiveContainerOptions.classList.add('objective_container_options');
        optionAElement.classList.add('option');
        optionBElement.classList.add('option');
        optionCElement.classList.add('option');
        optionDElement.classList.add('option');

        objectiveContainerQuestion.innerText = 'Q.' + questionCounter + ') ' + question;
        optionAElement.innerText = optionA;
        optionBElement.innerText = optionB;
        optionCElement.innerText = optionC;
        optionDElement.innerText = optionD;

        // Check answer on option click
        optionAElement.addEventListener('click', () => checkAnswer(optionAElement, answer));
        optionBElement.addEventListener('click', () => checkAnswer(optionBElement, answer));
        optionCElement.addEventListener('click', () => checkAnswer(optionCElement, answer));
        optionDElement.addEventListener('click', () => checkAnswer(optionDElement, answer));

        objectiveContainerOptions.append(optionAElement, optionBElement, optionCElement, optionDElement);
        objectiveContainer.append(objectiveContainerQuestion, objectiveContainerOptions);
        container.appendChild(objectiveContainer);

        questionCounter++;
    }

    // Function to check answer and provide feedback
    function checkAnswer(optionElement, answer) {
        if (!answered) {
            answered = true;
            if (optionElement.innerText === answer) {
                optionElement.classList.add('correct');
                correctAudio.play()
                correctAnswersCount++;
            } else {
                optionElement.classList.add('incorrect');
                // Find correct answer and change its class to correct
                let options = optionElement.parentElement.children;
                for (let i = 0; i < options.length; i++) {
                    if (options[i].innerText === answer) {
                        options[i].classList.add('correct');
                        break;
                    }
                }
                incorrectAnswersCount++;
                incorrectAudio.play()
            }
            // Disable all options after user has answered
            let options = optionElement.parentElement.children;
            for (let i = 0; i < options.length; i++) {
                options[i].style.pointerEvents = 'none';
            }
        }
        answered = false;
    }

    function addImg(imgUrl) {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img_container');
        imgContainer.style.backgroundImage = `url('${imgUrl}')`;
        container.appendChild(imgContainer);
    }

    function addHeadLine(text) {
        const headLine = document.createElement('h2');
        headLine.classList.add('head_line');
        headLine.innerText = text;
        container.appendChild(headLine);
    }

    function showResult() {
        const totalQuestions = questionCounter - 1;
        const totalScore = totalQuestions * 4;
        const userScore = correctAnswersCount * 4 - incorrectAnswersCount;
        const accuracy = (userScore / totalScore) * 100;

        const resultPopup = document.getElementById('resultPopup');

        resultPopup.classList.add('show');

        document.getElementById('correctAnswers').innerText = 'Correct Answers: ' + correctAnswersCount;
        document.getElementById('incorrectAnswers').innerText = 'Incorrect Answers: ' + incorrectAnswersCount;
        document.getElementById('totalScore').innerText = 'Total Score: ' + totalScore;
        document.getElementById('userScore').innerText = 'Your Score: ' + userScore;
        document.getElementById('accuracy').innerText = 'Accuracy: ' + accuracy.toFixed(2) + '%';
    }
    addImg('Biology Class 11th NEET Module - 01 | Chapter 03 Plant Kingdom Thumbnail.jpg')
    
    addHeadLine("Classification")
    
    writeObjective('The phylogenetic classification was put forth by:', 'Carolus Linnaeus ', 'Aristotle ', 'Adolf Engler and Karl Prantl', 'Theophrastus', 'Adolf Engler and Karl Prantl');
    writeObjective('Which are true about neumerical taxonomy ? \n \n A)Equal importance given to each character \n B) Based on all observable characters \n C)  Easily carried out using computers \n D) At the same time only few characters can be considers','A, B and D', 'B, C and D', 'A, C and D', 'A, B and C', 'A, B and C');
    writeObjective('Natural system of classification is based on', 'External and internal features','Ultrastructure and anatomy', 'Embryology and phytochemistry', 'All of the above','All of the above');
    writeObjective('Tracheophyta includes', 'Bryophyta and Pteridophyta', 'Pteridophyta and Gymnosperm','Gymnosperm and Angiosperm', 'Pteridophyta, Gymnosperm and Angiosperm','Pteridophyta, Gymnosperm and Angiosperm');
    writeObjective('Which is/are included in the phanerogams ?', 'Pteridophyta', 'Gymnosperm', 'Angiosperm','Both (b) and (c)', 'Both (b) and (c)');
    writeObjective('The natural system of classification for flowering plants was given by', 'R.H Whittaker', 'Aristotle and G.J. Mendel', 'George Bentham and J.D. Hooker', 'Aristotle and George Bentham', 'George Bentham and J.D. Hooker');
    writeObjective('Classification which is based on evolutionary relationships of various organisms is', 'Artificial', 'Natural', 'Phylogenetic', 'Two kingdom classification', 'Phylogenetic');
    writeObjective('Classification which is based only on morphological characters is called', 'Artificial system', 'Natural system', 'Phylogenetic system', 'Numerical taxonomy', 'Artificial system');
    writeObjective('Classification based on cytological information like chromosome number, structure and behaviour is called', 'Numerical taxonomy', 'Cytotaxonomy', 'Chemotaxonomy', 'Nuclear taxonomy', 'Cytotaxonomy');
    writeObjective('Archegoniate is an assemblage of:', 'Algae, bryophyta and pteridophyta', 'Bryophyta, pteridophyta and gymnosperm', 'Bryophyta pteridophyta gymnosperm and angiosperm', 'pteridophyta, gymnosperm and angiosperm', 'Bryophyta, pteridophyta and gymnosperm');
    addHeadLine("Algae");
    writeObjective('In ulothrix, meiosis takes place during', 'Gamete formation', 'Zoospore formation', 'Zoospore germination', 'Zygote germination', 'Zygote germination');
    writeObjective('Trichoderma erythrium which gives colour to red sea is :', 'Green alga', 'Blue - Green alga', 'Red alga', 'Brown alga', 'Blue - Green alga');
    writeObjective('The pigment that gives class-rhodophyceae (red algae) its distinctive red colour is', 'Chlorophyll-a, b', 'Chlorophyll-a, c', 'Chlorophyll-a, d', 'Chlorophyll-a, c and d', 'Chlorophyll-a, d');
    writeObjective('Which of the following is a phaeophycean algae ?', 'Gelidium', 'Polysiphonia', 'Porphyra', 'Laminaria', 'Laminaria');
    writeObjective('Which of the following is not a character of brown algae ?', 'Presence of chlorophyll a and b', 'It remains attached to substratum', 'Presence of chlorophyll a and c', 'Presence of fucoxanthin', 'Presence of chlorophyll a and b');
    writeObjective('Phycoerythrin pigment is found in', 'Green algae', 'Red algae', 'Brown algae', 'All of the above', 'Red algae');
    writeObjective('In which alga, motile colonies are found ?', 'Volvox', 'Spirogyra', 'Ulothrix', 'All of the above', 'Volvox');
    writeObjective('Match the columns I and II, and Choose the correct combinations from the options given. \n \n  A) Chlorophyceae                    i) Floridean starch \n B) Phaeophyceae                    ii) Starch \n C) Rhodophyceae                    iii) Laminarin and mannitol', 'A-i, B-ii, C-iii', 'A-ii, B-iii, C-i', 'A-i, B-iii, C-ii', 'A-ii, B-i, C-iii', 'A-ii, B-iii, C-i');
    writeObjective('Algae growing on shells and bodies of animals are called ', 'Epiphytic', 'Epilithic', 'Epizoic', 'Endophytic', 'Epizoic');
    writeObjective('Which of the following is non-flagellate ?', 'Chlorella', 'Ulothrix', 'Spirogyra', 'All of the above', 'All of the above');
    writeObjective('Which of the following algae are used by space travellers as food suppliments ?', 'Gracilaria, Gelidium', 'Volvox, Ulothrix', 'Spirogyra, Kelps', 'Spirulina, Chlorella', 'Spirulina, Chlorella');
    writeObjective('Volvox and Polysiphonia are members of algal class, A and B respectively. Which of the following statements is correct ?', 'Cellulose and algin are cell wall components of members oa A', 'Floridean starch is stored material in B', 'Chlorophyll a, c and fucoxanthin are the photosynthesis pigments found in class A', 'Two unequal flagella are found in members of B', 'Floridean starch is stored material in B');
    writeObjective('Fusions between a larger non motile female gamete and smaller motile male gamete is called', 'Isogamy', 'Anisogamy', 'Oogamy', 'None of the above', 'Oogamy');
    writeObjective('How many chloroplast are present in a cell of Ulothrix ', 'Single', 'Many', 'Few', 'None', 'Single');
    writeObjective('Pyrenoids are found in the chloroplast of', 'Algae', 'Pteridophytes ', 'Gymnosperm', 'Angiosperm', 'Algae');
    writeObjective('Pyrenoid consists of', 'Protein besides starch', 'Protein around starch', 'Starch around protein', 'Both (a) and (c)', 'Both (a) and (c)');
    writeObjective('Pyrenoides are related to', 'Protein storage', 'Starch formation', 'Metabolism', 'Reproduction', 'Starch formation');
    writeObjective('Fucoxanthin pigment is found in', 'Green algae', 'Brown algae', 'Red algae', 'All of the above ', 'Brown algae');
    writeObjective('Algae which is used as food by space travellers is', 'Chlorella', 'Nostoc', 'Spirulina', 'Both (a) and (c)', 'Both (a) and (c)');
    writeObjective('Fusion of two motile gametes which are dissimilar in size is termed as', 'Oogamy', 'Isogamy', 'Anisogamy', 'Zoogamy', 'Anisogamy');
    writeObjective('Agar an algin are products of', 'Cell membrane', 'Cell wall', 'Mitochondria', 'Vacuole', 'Cell wall');
    writeObjective('Sexual reproduction in Ulothrix is', 'Isogamous', 'Anisogamous', 'Oogamous', 'All of the above ', 'Isogamous');
    writeObjective('Ulothrix and spirogyra reproduce vegetatively by', 'Fragmentation', 'Binary fission ', 'Budding ', 'All of the above ', 'Fragmentation');
    writeObjective('In chlorophycee and phaeophyceae the types of sexual reproduction is/are', 'Isogamous', 'Anisogamous', 'Oogamous', 'All of the above', 'All of the above');
    writeObjective('Match the column I and II, and choose the correct combination from the options given. \n \n A) Chlorophyceae   i) Chlorophyll a, c, fucoxanthin \n B) Phaeophyceae ii) Chlorophyll a, d, phycoerythrin \n C) Rhodophyceae iii) Chlorophyll a, b', 'A-iii, B-i, C-ii', 'A-iii, B-ii, C-i', 'A-ii, B-i, C-iii', 'A-i, B-iii, C-ii', 'A-iii, B-i, C-ii');
    writeObjective('In Phaeophyceae, the gametes are', 'Pyriform and bear 2 flagella (one longitudinal and other transverse)', 'Pear-shaped and bear 2 flagella that are laterally attached', 'Pyriform and bear 2-8, equal and apical flagella', 'Pear-shaped and bear 2-8, equal and apical flagella', 'Pear-shaped and bear 2 flagella that are laterally attached');
    writeObjective('The plant body of brown algae is attached to the substratum by', 'Holdfast', 'Stipe', 'Stalk', 'Frond', 'Holdfast');
    writeObjective('In which class, the cell wall possesses pectin and polysulphate easters beside the cellulose?', 'Chlorophyceae', 'Phaeophyceae', 'Rhodophyceae', 'All of the above', 'Rhodophyceae');
    writeObjective('In Fucus, the male and female gamete are ', 'Motile', 'Non-motile', 'Motile and non-motile respectively', 'Non-motile and motile respectively', 'Motile and non-motile respectively');
    writeObjective('In Phaeophyceae, vegetative reproduction takes place by', 'Fragmentation', 'Binary fission', 'Budding', 'All of the above', 'Fragmentation');
    writeObjective('How many species of marine algae are use as food?', '17', '7', '70', '71', '70');
    writeObjective('Floridean starch is very similar to', 'Amylopectin', 'Cellulose', 'Glycogen', 'Both (a) and (c)', 'Both (a) and (c)');
    writeObjective('Algae classified into three classes on the basis of', 'Type of pigment', 'Type of stored food material', 'Type of reproduction', 'Both (a) and (c)', 'Both (a) and (c)');
    writeObjective('Cell wall is made an inner layer of cellulose and an outer layer of pectose, in', 'Ectocarpous', 'Sargassum', 'Chara', 'Glacilaria', 'Chara');
    writeObjective('At least a half of the total CO₂ fixation on Earth is carry out by', 'Algae', 'Angiosperm', 'Bryophyta', 'Gymnosperm', 'Algae');
    writeObjective('In most of the algal genera the dominant phase of life cycle is', 'Haplontic', 'Diplontic', 'Haplodiplontic ', 'Isomorphic', 'Haplontic');
    writeObjective('Which type of life cycle is shown by  kelps, Ectocarpus and Polysiphonia?', 'Haplontic', 'Diplontic', 'Haplodiplontic', 'Isomorphic', 'Haplodiplontic');
    writeObjective('Find out the incorrect match:', 'Ulothrix and Spirogyra — Filamentous algae', 'Clamydomonous — Unicellular flagellate algae', 'Chlorella — Unicellular, non-flagellate algae', 'Volvox — Colonial, non-flagellate algae', 'Volvox — Colonial, non-flagellate algae');
    writeObjective('Agar-agar is obtained from', 'Gigartina', 'Gelidium', 'Gracilaria', 'All of the above', 'All of the above');
    writeObjective('Which of the following occurs both in fresh water as well as in marine water?', 'Oedogonium', 'Cladophora', 'Spirogyra', 'None of these ', 'Cladophora');
    writeObjective('In Ulothrix, meiosis (reduction division) occurs in ', 'Gamete', 'Zygospore', 'Zoospore', 'Thallus', 'Zygospore');
    writeObjective('Floridean starch is found in', 'Chlorophyceae', 'Rhodophyceae', 'Myxophyceae', 'Cyanophyceae', 'Rhodophyceae');
    writeObjective('Algae are useful because they', 'Purify the atmosphere', 'Are large in number', 'Are used in fermentation', 'Are used to study respiration', 'Purify the atmosphere');
    writeObjective('In the life cycle of which group, flagellated cells are not formed', 'Chlorophyceae', 'Phaeophyceae', 'Rhodophyceae', 'Both (b) and (c)', 'Rhodophyceae');
    writeObjective('The most common type of spore produced during a sexual reproduction of algae is', 'Aplanospore', 'Endospore', 'Zoospore', 'Oospore', 'Zoospore');
    writeObjective('The type of chloroplasts observed in class Chlorophyceae is ', 'Discoid and plate-like', 'Spiral or ribbon-shaped', 'Reticulate and Cup shaped', 'All of the above', 'All of the above');
    


    document.getElementById('getResult').addEventListener('click', function() {
        showResult()
        resultSound.play()
    });
