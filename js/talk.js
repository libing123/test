new TypeIt("#lywry", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("下次周末见！！")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("不必到明年再见！！")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("嘿嘿！！")
    .pause(3000)
    .go();

new TypeIt('#talkToWRY', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 28
}).go();