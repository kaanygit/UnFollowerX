const sleep=(ms)=>{
    return new Promise(resolve=>setTimeout(resolve,ms));
};

let followers=[];
let followersImage=[];
let followersAData = [];

let follow=[];
let followImage=[];
let followBData = [];

let totalList=[];
let totalListImage=[];

let followersA;
let followersAImage;

let followersB;
let followersBImage;
let button;
if(!document.querySelector('container')){
    button=document.createElement('button');
    button.type='button';
    button.id='unfButtonX';
    button.innerText="UnFollowerX";
    document.querySelector('header').appendChild(button);
}else{
    console.log('calısmıyor');
}






const followersFunc=async()=>{
    const linkElement = document.querySelector('a.x1i10hfl.xjbqb8w.x6umtig.x1b1mbwd.xaqea5y.xav7gou.x9f619.x1ypdohk.xt0psk2.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x16tdsg8.x1hl2dhg.xggy1nq.x1a2a7pz._alvs._a6hd');
    if (linkElement) {    
        linkElement.click();
    }else{
        alert('Öge Seçilemedi !');
    };
    let height=1;
    let last_height=0;
    while(height!==last_height){
        last_height=height;
        await sleep(2000);
        document.querySelector('div._aano').scrollTo(0,document.querySelector('div._aano').scrollHeight);
        height=document.querySelector('div._aano').scrollHeight;
        try{
            followersA=document.querySelectorAll('div.x9f619.xjbqb8w.x1rg5ohu.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.x1q0g3np.xqjyukv.x6s0dn4.x1oa3qoh.x1nhvcw1');
            followersAImage=document.querySelectorAll('.x6umtig.x1b1mbwd.xaqea5y.xav7gou.xk390pu.x5yr21d.xpdipgo.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x11njtxf.xh8yej3');
        }catch(error){
            console.log('error codu',error);
        }
    }
};

const followFunc=async()=>{
    let height=1;
    let last_height=0;
    while(height!==last_height){
        last_height=height;
        await sleep(2000);
        document.querySelector('div._aano').scrollTo(0,document.querySelector('div._aano').scrollHeight);
        height=document.querySelector('div._aano').scrollHeight;
        try{
            followersB=document.querySelectorAll('div.x9f619.xjbqb8w.x1rg5ohu.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.x1q0g3np.xqjyukv.x6s0dn4.x1oa3qoh.x1nhvcw1');
            followersBImage=document.querySelectorAll('.x6umtig.x1b1mbwd.xaqea5y.xav7gou.xk390pu.x5yr21d.xpdipgo.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x11njtxf.xh8yej3');
        }catch(error){
            console.log(error,error.code);
        }
    }
};


button.addEventListener('click',async()=>{
    //followers
    await followersFunc();
    await followersA.forEach((e,index)=>{
        let dataA={
            'account':e.innerText,
            'image':followersAImage[index].src
        };
        followers.push(e.innerText);
        followersAData.push(dataA);
    });
    console.log(followersAData);
    // await followersAImage.forEach((e)=>{
    //     followersImage.push(e.src);
    // })
    document.querySelector('.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1sxyh0.xurb0ha.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1 button').click();

    //gecis
    document.querySelector('ul.x78zum5.x1q0g3np.xieb3on li:nth-child(3) a.x1i10hfl.xjbqb8w.x6umtig.x1b1mbwd.xaqea5y.xav7gou.x9f619.x1ypdohk.xt0psk2.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x16tdsg8.x1hl2dhg.xggy1nq.x1a2a7pz._alvs._a6hd').click();
    await sleep(2000);


    //follow
    await followFunc();
    await followersB.forEach((e,index)=>{
        let dataB={
            'account':e.innerText,
            'image':followersBImage[index].src
        }
        follow.push(e.innerText);
        followBData.push(dataB);
    });
    // await followersBImage.forEach((e)=>{
    //     followImage.push(e.src);
    // })
    document.querySelector('.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1sxyh0.xurb0ha.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1 button').click();
    await sleep(1000);

    //karsılastırma

    follow.forEach((element)=>{
        if(followers.includes(element))return;
        totalList.push(element);
        console.log(element);
    });
    followImage.forEach((element)=>{
        if(followersImage.includes(element))return;
        totalListImage.push(element);
    });
    followBData.forEach((element)=>{
        if(followersAData.includes(element))return;
        totalList.push(element);
    })


    //container
    const container=document.createElement('div');
    container.class='container';
    container.id='container';

    //title
    const h1=document.createElement('h1');
    h1.innerText='UnFollowerX';
    h1.id='titleUnfX';
    container.appendChild(h1);

    //ul
    const ul=document.createElement('ul');
    ul.id='ul';
    container.appendChild(ul);

    document.querySelector('header').appendChild(container);

    await sleep(1000);

    for(let i=0;i<totalList.length;i++){
        const li=document.createElement('li');
        li.id='listItemLi';

        let imageCreateElement=document.createElement('img');
        imageCreateElement.src=totalListImage[i];
        imageCreateElement.id='accountProfileImage';
        imageCreateElement.alt='imageProfile';
        li.appendChild(imageCreateElement);

        let labelCreateElement=document.createElement('label');
        labelCreateElement.innerText=`@ ${totalList[i]}`;
        labelCreateElement.id='labelElement';
        imageCreateElement.insertAdjacentElement('afterend',labelCreateElement);

        // box appendChild
        ul.appendChild(li);
    };   
    if(!document.querySelector('container')){
        document.getElementById('unfButtonX').remove();
    }else{
        console.log('button active');
    }
    
});


