const voiceSelect=document.querySelector('select');
const button=document.querySelector('button');

const speech=new SpeechSynthesisUtterance();
let voices=[];

window.speechSynthesis.onvoiceschanged = ()=>{
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[0];

    voices.forEach((voice,i) => (voiceSelect.options[i]=new Option(voice.name,i)));
};

voiceSelect.addEventListener('change',()=>{
    speech.voice=voices[voiceSelect.value];
    console.log(voiceSelect);
});

button.addEventListener('click',()=>{
    speech.text=document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
})

