def on_button_pressed_a():
    global settime
    settime += 1
    basic.show_number(settime)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global settime
    settime = 0
    basic.show_number(settime)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global settime
    basic.show_leds("""
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        """)
    while settime > 0:
        basic.pause(1000)
        settime += -1
        basic.show_number(settime)
    music.play_tone(262, music.beat(BeatFraction.WHOLE))
    music.play_tone(294, music.beat(BeatFraction.WHOLE))
    music.play_tone(330, music.beat(BeatFraction.WHOLE))
    basic.show_leds("""
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        """)
    control.wait_for_event(0, 0)
input.on_button_pressed(Button.B, on_button_pressed_b)

settime = 0
settime = 0
basic.show_leds("""
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    """)