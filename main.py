def on_button_pressed_a():
    global accumulator
    accumulator += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_pin_pressed_p2():
    global accumulator
    accumulator += 1
input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p2)

def doSomething():
    global old_accumulator
    if old_accumulator != accumulator:
        if accumulator > 15:
            strip.set_pixel_color(accumulator, neopixel.colors(NeoPixelColors.GREEN))
        else:
            strip.set_pixel_color(accumulator, neopixel.colors(NeoPixelColors.BLUE))
        if old_accumulator < accumulator and old_accumulator > 15:
            strip.set_pixel_color(old_accumulator, neopixel.colors(NeoPixelColors.GREEN))
        elif old_accumulator > accumulator and old_accumulator > 15:
            strip.set_pixel_color(old_accumulator, neopixel.colors(NeoPixelColors.BLACK))
        elif old_accumulator > accumulator and old_accumulator < 15:
            strip.set_pixel_color(old_accumulator, neopixel.colors(NeoPixelColors.BLUE))
        elif old_accumulator < accumulator and old_accumulator < 15:
            strip.set_pixel_color(old_accumulator, neopixel.colors(NeoPixelColors.BLACK))
        strip.show()
    old_accumulator = accumulator

def on_button_pressed_b():
    global accumulator
    accumulator += -1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_pin_pressed_p1():
    global accumulator
    accumulator += -1
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

Win = 0
strip: neopixel.Strip = None
accumulator = 0
old_accumulator = 0
old_accumulator = 15
accumulator = 15
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
strip.set_pixel_color(15, neopixel.colors(NeoPixelColors.RED))
strip.show()
basic.show_string("3,2,1 Mash!",60)
soundExpression.slide.play_until_done()

def on_forever():
    global Win
    if Win == 0:
        doSomething()
        if accumulator <= 1:
            Win = 1
        if accumulator >= 29:
            Win = 2
basic.forever(on_forever)

def on_forever2():
    if Win == 1:
        soundExpression.spring.play_until_done()
basic.forever(on_forever2)

def on_forever3():
    if Win == 1:
        basic.show_string("Blue Wins!", 75)
basic.forever(on_forever3)

def on_forever4():
    if Win == 2:
        soundExpression.twinkle.play_until_done()
basic.forever(on_forever4)

def on_forever5():
    if Win == 1:
        strip.show_color(neopixel.colors(NeoPixelColors.BLUE))
        strip.show()
        basic.pause(200)
        strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
        strip.show()
        basic.pause(200)
basic.forever(on_forever5)

def on_forever6():
    if Win == 2:
        basic.show_string("Green Wins!", 75)
basic.forever(on_forever6)

def on_forever7():
    if Win == 2:
        strip.show_color(neopixel.colors(NeoPixelColors.GREEN))
        strip.show()
        basic.pause(200)
        strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
        strip.show()
        basic.pause(200)
basic.forever(on_forever7)
