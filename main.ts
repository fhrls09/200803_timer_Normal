input.onButtonPressed(Button.A, function () {
    settime += 1
    basic.showNumber(settime)
})
input.onButtonPressed(Button.AB, function () {
    settime = 0
    basic.showNumber(settime)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    while (settime > 0) {
        basic.pause(1000)
        settime += -1
        basic.showNumber(settime)
    }
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        music.playTone(262, music.beat(BeatFraction.Eighth))
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        music.playTone(330, music.beat(BeatFraction.Eighth))
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        music.playTone(330, music.beat(BeatFraction.Eighth))
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    music.playTone(392, music.beat(BeatFraction.Whole))
})
let settime = 0
settime = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
