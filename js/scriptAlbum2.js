const albumPoint = document.querySelector(".main-container-2");
let documentFragment = document.createDocumentFragment();

let ListOfLinksPictures = ["https://i.ibb.co/CmJDcFD/1.jpg","https://i.ibb.co/pjHgV4L/2.jpg","https://i.ibb.co/k12B4L6/3.jpg","https://i.ibb.co/5MbD2w6/4.jpg","https://i.ibb.co/YyDXQM7/5.jpg","https://i.ibb.co/f8P47qN/6.jpg","https://i.ibb.co/GpH7h7P/7.jpg","https://i.ibb.co/X3pq4rS/8.jpg","https://i.ibb.co/kD8zS1K/9.jpg","https://i.ibb.co/PMKWWCG/10.jpg","https://i.ibb.co/R37YB22/11.jpg","https://i.ibb.co/grrnyyH/12.jpg","https://i.ibb.co/T49b9q3/13.jpg","https://i.ibb.co/FHWcbRn/14.jpg","https://i.ibb.co/BCT22SR/15.jpg","https://i.ibb.co/n02MwSF/16.jpg","https://i.ibb.co/59p15Ss/17.jpg","https://i.ibb.co/3f1y2d2/18.jpg","https://i.ibb.co/KNF7zKF/19.jpg","https://i.ibb.co/5MGL1ww/20.jpg","https://i.ibb.co/bv4KMpk/21.jpg","https://i.ibb.co/5BYY8Vt/22.jpg","https://i.ibb.co/TvbV4QV/23.jpg","https://i.ibb.co/GFdmwk5/24.jpg","https://i.ibb.co/d254WMy/25.jpg","https://i.ibb.co/2gqhxdc/26.jpg","https://i.ibb.co/h2tpVft/27.jpg","https://i.ibb.co/bmzv5z5/28.jpg","https://i.ibb.co/xjWkkTf/29.jpg","https://i.ibb.co/7zpG9b2/30.jpg","https://i.ibb.co/3NPGCCK/31.jpg","https://i.ibb.co/bmKv0qm/32.jpg","https://i.ibb.co/ZY5xkfj/33.jpg","https://i.ibb.co/NtypzkX/34.jpg","https://i.ibb.co/TwvSq4d/35.jpg","https://i.ibb.co/74BRWC7/36.jpg","https://i.ibb.co/2KmmBm0/37.jpg","https://i.ibb.co/TLP4v1J/38.jpg","https://i.ibb.co/PhNKPWg/39.jpg","https://i.ibb.co/r06G6H1/40.jpg","https://i.ibb.co/GM8LDW6/41.jpg","https://i.ibb.co/nwzdgvs/42.jpg","https://i.ibb.co/BB4wGLG/43.jpg","https://i.ibb.co/r3wMBwr/44.jpg","https://i.ibb.co/Htfcbr1/45.jpg","https://i.ibb.co/9VNKMzb/46.jpg","https://i.ibb.co/R0XMQRk/47.jpg","https://i.ibb.co/k2PvvPt/48.jpg","https://i.ibb.co/zW3cy3L/50.jpg","https://i.ibb.co/DbsY8MV/51.jpg","https://i.ibb.co/30gM5d5/52.jpg","https://i.ibb.co/bXjmxdR/53.jpg","https://i.ibb.co/4WWMTbJ/54.jpg","https://i.ibb.co/k6vq26Z/55.jpg","https://i.ibb.co/h75j3GW/56.jpg","https://i.ibb.co/3vH0NK0/57.jpg","https://i.ibb.co/Jpc8tQw/58.jpg","https://i.ibb.co/NVRDYTQ/59.jpg","https://i.ibb.co/mB3NLcw/60.jpg","https://i.ibb.co/Wy4DzVs/61.jpg","https://i.ibb.co/J7zp5sS/62.jpg","https://i.ibb.co/qMgsMR6/63.jpg","https://i.ibb.co/VjThr8n/64.jpg","https://i.ibb.co/PZrffv7/65.jpg","https://i.ibb.co/HrRWj9v/66.jpg","https://i.ibb.co/pnbD4sg/67.jpg","https://i.ibb.co/JqmvDfZ/68.jpg","https://i.ibb.co/S6qjb6f/69.jpg","https://i.ibb.co/TcKT81y/70.jpg","https://i.ibb.co/JHmt5Xx/71.jpg","https://i.ibb.co/WGXcNrq/72.jpg","https://i.ibb.co/SxCYdXq/73.jpg","https://i.ibb.co/sm24zPx/74.jpg","https://i.ibb.co/sySVwvw/75.jpg","https://i.ibb.co/rtxPL5L/76.jpg","https://i.ibb.co/7k3YjWY/77.jpg","https://i.ibb.co/MZ7Czqp/78.jpg","https://i.ibb.co/RcvgpRH/79.jpg","https://i.ibb.co/L97RFzJ/80.jpg","https://i.ibb.co/M6rXS0H/81.jpg","https://i.ibb.co/FDL3ZGT/82.jpg","https://i.ibb.co/w6CtfFw/83.jpg","https://i.ibb.co/nmmSJ9J/84.jpg","https://i.ibb.co/72Sm8Lw/85.jpg","https://i.ibb.co/yQnNVgZ/86.jpg","https://i.ibb.co/kQSVmVv/87.jpg","https://i.ibb.co/fqR7n3w/88.jpg","https://i.ibb.co/y0VnNPV/89.jpg","https://i.ibb.co/5x27Yv6/90.jpg","https://i.ibb.co/L5bYgSC/91.jpg","https://i.ibb.co/PW77Mpc/92.jpg","https://i.ibb.co/ryW6RQ7/93.jpg","https://i.ibb.co/3CSQ2nM/94.jpg","https://i.ibb.co/3dDXgrK/95.jpg","https://i.ibb.co/WFsj0Lr/96.jpg","https://i.ibb.co/s1sG6gG/97.jpg","https://i.ibb.co/x82MfRH/98.jpg","https://i.ibb.co/rGk1592/99.jpg","https://i.ibb.co/zRRvnpj/100.jpg","https://i.ibb.co/YDJg3C4/101.jpg","https://i.ibb.co/mvFtcW0/102.jpg","https://i.ibb.co/GVStQH9/103.jpg","https://i.ibb.co/YDBcfJJ/104.jpg","https://i.ibb.co/WWYSjvg/105.jpg","https://i.ibb.co/GVJ3Hws/106.jpg","https://i.ibb.co/D7HMT2v/107.jpg","https://i.ibb.co/V9dH4mt/108.jpg","https://i.ibb.co/bvqrBZL/109.jpg","https://i.ibb.co/zs2pqLj/110.jpg","https://i.ibb.co/hWBZkSQ/111.jpg","https://i.ibb.co/D9sP483/112.jpg","https://i.ibb.co/Nj0fsk7/113.jpg","https://i.ibb.co/kcj2yTz/114.jpg","https://i.ibb.co/DYgYVk2/115.jpg","https://i.ibb.co/0QrH5Ph/116.jpg","https://i.ibb.co/dB48ZBb/117.jpg","https://i.ibb.co/JFPFHwG/118.jpg","https://i.ibb.co/QXdLGk0/119.jpg","https://i.ibb.co/JCR0qZ3/120.jpg","https://i.ibb.co/R42kCdG/121.jpg","https://i.ibb.co/M1x2LVN/122.jpg","https://i.ibb.co/VMSmh1m/123.jpg","https://i.ibb.co/qY4ch7X/124.jpg","https://i.ibb.co/HYgZHSZ/125.jpg","https://i.ibb.co/prRR149/126.jpg","https://i.ibb.co/9Y72nBf/127.jpg"];
let listOfLinkPicturesCompressed = ["https://i.ibb.co/M5bGm74/1-min.jpg","https://i.ibb.co/RhdjmN3/2-min.jpg","https://i.ibb.co/tppV0kj/3-min.jpg","https://i.ibb.co/dkBWK7S/4-min.jpg","https://i.ibb.co/Jv6nwkV/5-min.jpg","https://i.ibb.co/VjzNx6v/6-min.jpg","https://i.ibb.co/JRTZSbF/7-min.jpg","https://i.ibb.co/MDWK9Nc/8-min.jpg","https://i.ibb.co/Hxc2kgx/9-min.jpg","https://i.ibb.co/HpXgt91/10-min.jpg","https://i.ibb.co/zxdnYzv/11-min.jpg","https://i.ibb.co/FWndqsG/12-min.jpg","https://i.ibb.co/hd6q4SW/13-min.jpg","https://i.ibb.co/px6VR0R/14-min.jpg","https://i.ibb.co/FVt1r1z/15-min.jpg","https://i.ibb.co/tL628S6/16-min.jpg","https://i.ibb.co/CtSm6dF/17-min.jpg","https://i.ibb.co/NnzVWkx/18-min.jpg","https://i.ibb.co/Ks1vVxB/19-min.jpg","https://i.ibb.co/gyFyHvz/20-min.jpg","https://i.ibb.co/QkxdWLJ/21-min.jpg","https://i.ibb.co/92F2xqm/22-min.jpg","https://i.ibb.co/bPQYjRT/23-min.jpg","https://i.ibb.co/kyBBJFf/24-min.jpg","https://i.ibb.co/rZrY0Yz/25-min.jpg","https://i.ibb.co/d01ZWQv/26-min.jpg","https://i.ibb.co/n8zjyJy/27-min.jpg","https://i.ibb.co/SsrqR41/28-min.jpg","https://i.ibb.co/Qd7kH0b/29-min.jpg","https://i.ibb.co/cvd2nsx/30-min.jpg","https://i.ibb.co/6gFj2Gs/31-min.jpg","https://i.ibb.co/6DmSNFS/32-min.jpg","https://i.ibb.co/DzCHWxM/33-min.jpg","https://i.ibb.co/R9WCWSC/34-min.jpg","https://i.ibb.co/qsPd4hj/35-min.jpg","https://i.ibb.co/3vszWQY/36-min.jpg","https://i.ibb.co/Lp1y8wX/37-min.jpg","https://i.ibb.co/k2qkKGz/38-min.jpg","https://i.ibb.co/tsS2G7P/39-min.jpg","https://i.ibb.co/FsyWG4P/40-min.jpg","https://i.ibb.co/TqCs890/41-min.jpg","https://i.ibb.co/fdTHMKF/42-min.jpg","https://i.ibb.co/Xz6tf1x/44-min.jpg","https://i.ibb.co/7CFbrw8/45-min.jpg","https://i.ibb.co/8MC4SyS/46-min.jpg","https://i.ibb.co/9TWdJ1G/47-min.jpg","https://i.ibb.co/VHCQDVb/48-min.jpg","https://i.ibb.co/gV1zpVP/50-min.jpg","https://i.ibb.co/P1t8Xxz/51-min.jpg","https://i.ibb.co/NKcgTrG/52-min.jpg","https://i.ibb.co/PwKt43G/53-min.jpg","https://i.ibb.co/c3kMzF7/54-min.jpg","https://i.ibb.co/TR3jdrb/55-min.jpg","https://i.ibb.co/T1zhtZh/56-min.jpg","https://i.ibb.co/ncBP5pv/57-min.jpg","https://i.ibb.co/xgxy9Tp/58-min.jpg","https://i.ibb.co/bXt82L2/59-min.jpg","https://i.ibb.co/tL84zz0/60-min.jpg","https://i.ibb.co/VgTpWFk/61-min.jpg","https://i.ibb.co/mFtnRM3/62-min.jpg","https://i.ibb.co/jTQSHx6/63-min.jpg","https://i.ibb.co/gFrck98/64-min.jpg","https://i.ibb.co/nMR2FPM/65-min.jpg","https://i.ibb.co/fDzLfLk/67-min.jpg","https://i.ibb.co/gVnVsrD/68-min.jpg","https://i.ibb.co/ZVnnZVp/69-min.jpg","https://i.ibb.co/1KnvNg7/70-min.jpg","https://i.ibb.co/2h6tGbM/71-min.jpg","https://i.ibb.co/T074tjj/72-min.jpg","https://i.ibb.co/vwq2YvD/73-min.jpg","https://i.ibb.co/st5jQ8F/74-min.jpg","https://i.ibb.co/NrxBYt9/75-min.jpg","https://i.ibb.co/XJn76DN/76-min.jpg","https://i.ibb.co/wBh87CK/77-min.jpg","https://i.ibb.co/5cYPJmF/78-min.jpg","https://i.ibb.co/b1gsBdt/79-min.jpg","https://i.ibb.co/7bwp4vX/80-min.jpg","https://i.ibb.co/b7ncfk0/81-min.jpg","https://i.ibb.co/C7KfNqT/82-min.jpg","https://i.ibb.co/RzrzH58/83-min.jpg","https://i.ibb.co/0YDQHGm/84-min.jpg","https://i.ibb.co/GvYFdBT/85-min.jpg","https://i.ibb.co/jVp9mZL/86-min.jpg","https://i.ibb.co/Nt1VRgH/87-min.jpg","https://i.ibb.co/K5x29w1/88-min.jpg","https://i.ibb.co/GVWNLF4/89-min.jpg","https://i.ibb.co/D1Cwcyk/90-min.jpg","https://i.ibb.co/wc1ttD6/91-min.jpg","https://i.ibb.co/vXSJdq9/92-min.jpg","https://i.ibb.co/vwh26N9/93-min.jpg","https://i.ibb.co/p2xVQs2/94-min.jpg","https://i.ibb.co/0KshXZk/95-min.jpg","https://i.ibb.co/Z1WBdPy/96-min.jpg","https://i.ibb.co/x3Z6KvN/97-min.jpg","https://i.ibb.co/8mTCqdN/98-min.jpg","https://i.ibb.co/z76FR2C/99-min.jpg","https://i.ibb.co/q0nxG8h/100-min.jpg","https://i.ibb.co/c609g7p/101-min.jpg","https://i.ibb.co/9yJ9RTF/102-min.jpg","https://i.ibb.co/6gJxS87/103-min.jpg","https://i.ibb.co/HD1Zvyw/104-min.jpg","https://i.ibb.co/cb1hTpF/105-min.jpg","https://i.ibb.co/8BCrdTv/106-min.jpg","https://i.ibb.co/CznvsXK/107-min.jpg","https://i.ibb.co/GC1G64N/108-min.jpg","https://i.ibb.co/jw7q0gs/109-min.jpg","https://i.ibb.co/cc6Wdwc/110-min.jpg","https://i.ibb.co/CBW1g2S/111-min.jpg","https://i.ibb.co/Gnn7KCt/112-min.jpg","https://i.ibb.co/0n32MLF/113-min.jpg","https://i.ibb.co/hdWJ9Vr/114-min.jpg","https://i.ibb.co/TKVBrPj/115-min.jpg","https://i.ibb.co/M5h7gBT/116-min.jpg","https://i.ibb.co/NZ86YBv/117-min.jpg","https://i.ibb.co/kQFc7vD/118-min.jpg","https://i.ibb.co/Z1n6jMN/119-min.jpg","https://i.ibb.co/M913xLG/120-min.jpg","https://i.ibb.co/BPDCXTZ/121-min.jpg","https://i.ibb.co/SPs47R3/122-min.jpg","https://i.ibb.co/6srQmRK/123-min.jpg","https://i.ibb.co/7NVp2wR/124-min.jpg","https://i.ibb.co/yVgGBCT/125-min.jpg","https://i.ibb.co/8rMXrxK/126-min.jpg","https://i.ibb.co/sCrcVZ2/127-min.jpg"];

for (var i = 29; i <= 60; i++) {
    let plusDiv = document.createElement("DIV");
    plusDiv.classList.add("div-responsive-ag");

    let plusDiv2 = document.createElement("DIV");
    plusDiv2.classList.add("div-gallery");

    let plusA = document.createElement("A");

    let plusImg = document.createElement("IMG");

    plusA.setAttribute("href", ListOfLinksPictures[i]);
    plusA.setAttribute("target", "_blank");
    plusImg.setAttribute("src",listOfLinkPicturesCompressed[i]);
    // plusImg.classList.toggle('headline');

    plusDiv.appendChild(plusDiv2);
    plusDiv2.appendChild(plusA);
    plusA.appendChild(plusImg);
    documentFragment.appendChild(plusDiv);
}

albumPoint.appendChild(documentFragment);

// Menu Responsive Design
const menuIcon = document.querySelector('.icon-menu');
const navLinks = document.querySelector('.navbar-responsive');
const divMobile = document.querySelector('.div__mobile-version');

menuIcon.addEventListener('click',() => {
    navLinks.classList.toggle('active')
    divMobile.classList.toggle('active-2')
})

// First test with YT code
// window.sr = ScrollReveal()
// sr.reveal(".headline",{
//     reset: false,
//     origin: 'left',
//     interval: 106,
//     duration:2000,
//     distance: '150%'
// })

// ScrollReveal().reveal('.headline');

// Pre-load Design / configuration for the index page /
window.onload = function(){
    $('#onloadPreLoader').fadeOut();
    $('body').removeClass('hidden');
    $('.header').removeClass('hidden-1');
    $('.album').removeClass('hidden-1');
}