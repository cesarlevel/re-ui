var tabListItems = document.querySelectorAll('.tab-link');
var tabList = document.querySelector('.tab').childNodes;
var tabContent = document.querySelectorAll('.tab-content');


//Hide all .tab-content except the first one


function clearTabs(){
    for(var i = 0; i < tabListItems.length; i++){
        tabListItems[i].className = 'tab-link';
    }

    for(var i = 0; i < tabContent.length; i++){
        if(i !== 0){
            tabContent[i].className = 'tab-content visually-hidden';
        }
    }
}

//Adds .is-active class to the first tab


//console.log(tabList);

for(var i = 0; i < tabList.length; i++){
    if(tabList[i].className === "tab-item"){
        for(var j = 0; j < tabList[i].childNodes.length; j++){
            if(tabList[i].childNodes[j].localName === "a"){
                tabList[i].childNodes[j].addEventListener("click", tabing, false);
                //console.log(tabList[i].childNodes[j]);
            }

        }

    }

}

function tabing(event){
    clearTabs();
    var target = event.target;
    target.classList.add('is-active');
    console.log(target)

}

//tabList.addEventListener("click", tabing, false);
