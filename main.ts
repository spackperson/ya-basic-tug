input.onButtonPressed(Button.A, function () {
    if (Win == 0 && Game_on == true) {
        accumulator += 1
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (Win == 0 && Game_on == true) {
        accumulator += 1
    }
})
function doSomething () {
    if (old_accumulator != accumulator) {
        if (accumulator > 15) {
            strip.setPixelColor(accumulator, neopixel.colors(NeoPixelColors.Green))
        } else {
            strip.setPixelColor(accumulator, neopixel.colors(NeoPixelColors.Blue))
        }
        if (old_accumulator < accumulator && old_accumulator > 15) {
            strip.setPixelColor(old_accumulator, neopixel.colors(NeoPixelColors.Green))
        } else if (old_accumulator > accumulator && old_accumulator > 15) {
            strip.setPixelColor(old_accumulator, neopixel.colors(NeoPixelColors.Black))
        } else if (old_accumulator > accumulator && old_accumulator < 15) {
            strip.setPixelColor(old_accumulator, neopixel.colors(NeoPixelColors.Blue))
        } else if (old_accumulator < accumulator && old_accumulator < 15) {
            strip.setPixelColor(old_accumulator, neopixel.colors(NeoPixelColors.Black))
        }
        strip.show()
    }
    old_accumulator = accumulator
}
input.onButtonPressed(Button.AB, function () {
    Win = 0
    old_accumulator = 15
    accumulator = 15
    strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
    strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.showString("3,2,1 Mash!", 60)
soundExpression.giggle.playUntilDone()
})
input.onButtonPressed(Button.B, function () {
    if (Win == 0 && Game_on == true) {
        accumulator += -1
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (Win == 0 && Game_on == true) {
        accumulator += -1
    }
})
let strip: neopixel.Strip = null
let accumulator = 0
let old_accumulator = 0
let Win = 0
let Game_on = false
Game_on = false
let Game_over = false
Win = 0
old_accumulator = 15
accumulator = 15
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Red))
strip.show()
basic.showString("3,2,1 Mash!", 60)
soundExpression.giggle.playUntilDone()
Game_on = true
basic.forever(function () {
    if (Win == 2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip.show()
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.show()
        basic.pause(200)
    }
})
basic.forever(function () {
    if (Win == 2) {
        basic.showString("Green Wins!", 75)
    }
})
/**
 */
basic.forever(function () {
    if (Win == 0) {
        doSomething()
        if (accumulator <= 1) {
            Win = 1
        }
        if (accumulator >= 29) {
            Win = 2
        }
    }
})
basic.forever(function () {
    if (Win == 2) {
        soundExpression.twinkle.playUntilDone()
    }
})
basic.forever(function () {
    if (Win == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.show()
        basic.pause(200)
    }
})
basic.forever(function () {
    if (Win == 1) {
        basic.showString("Blue Wins!", 75)
    }
})
basic.forever(function () {
    if (Win == 1) {
        soundExpression.spring.playUntilDone()
    }
})
