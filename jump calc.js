var form = document.getElementById('form')

form.addEventListener('submit',function(event){
    event.preventDefault()

    var strength = document.getElementById('strength').value
    var feet = document.getElementById('feet').value
    var inches = document.getElementById('inches').value
    var strength_modif =  Math.floor((strength-10)/2);
    var Long_jump = strength;
    var Standing_Long_jump = Math.floor(Long_jump/2);
    var High_jump = 3+strength_modif;
    var Standing_High_jump = Math.fround(High_jump/2);
    console.log(Standing_High_jump)
    var Height = Math.fround(feet+(inches/12))
    document.getElementById('SLJ').innerHTML = Standing_Long_jump;
    document.getElementById('SHJ').innerHTML = Standing_High_jump;
    document.getElementById('RLJ').innerHTML = Long_jump;
    document.getElementById('RHJ').innerHTML = High_jump;
})
