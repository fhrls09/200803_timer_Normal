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
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
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
