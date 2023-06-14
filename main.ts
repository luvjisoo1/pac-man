input.onPinPressed(TouchPin.P0, function () {
    a = false
    b = false
    c = true
    d = false
    if (c == true) {
        for (let index = 0; index < 4; index++) {
            Pac_Man.change(LedSpriteProperty.Y, 1)
            basic.pause(1000)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    a = true
    b = false
    c = false
    d = false
    if (a == true) {
        for (let index = 0; index < 4; index++) {
            Pac_Man.change(LedSpriteProperty.X, 1)
            basic.pause(1000)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    a = false
    b = true
    c = false
    d = false
    if (b == true) {
        for (let index = 0; index < 4; index++) {
            Pac_Man.change(LedSpriteProperty.X, -1)
            basic.pause(1000)
        }
    }
})
input.onPinPressed(TouchPin.P1, function () {
    a = false
    b = false
    c = false
    d = true
    if (d == true) {
        for (let index = 0; index < 4; index++) {
            Pac_Man.change(LedSpriteProperty.Y, -1)
            basic.pause(1000)
        }
    }
})
let d = false
let c = false
let b = false
let a = false
let Food_14: game.LedSprite = null
let Food_13: game.LedSprite = null
let Food_12: game.LedSprite = null
let Food_11: game.LedSprite = null
let Food_10: game.LedSprite = null
let Food_9: game.LedSprite = null
let Food_8: game.LedSprite = null
let Food_7: game.LedSprite = null
let Food_6: game.LedSprite = null
let Food_5: game.LedSprite = null
let Food_4: game.LedSprite = null
let Food_3: game.LedSprite = null
let Food_2: game.LedSprite = null
let Food_1: game.LedSprite = null
let Pac_Man: game.LedSprite = null
Pac_Man.set(LedSpriteProperty.Blink, 100)
Food_1.set(LedSpriteProperty.Blink, 500)
Food_2.set(LedSpriteProperty.Blink, 500)
Food_3.set(LedSpriteProperty.Blink, 500)
Food_4.set(LedSpriteProperty.Blink, 500)
Food_5.set(LedSpriteProperty.Blink, 500)
Food_6.set(LedSpriteProperty.Blink, 500)
Food_7.set(LedSpriteProperty.Blink, 500)
Food_8.set(LedSpriteProperty.Blink, 500)
Food_9.set(LedSpriteProperty.Blink, 500)
Food_10.set(LedSpriteProperty.Blink, 500)
Food_11.set(LedSpriteProperty.Blink, 500)
Food_12.set(LedSpriteProperty.Blink, 500)
Food_13.set(LedSpriteProperty.Blink, 500)
Food_14.set(LedSpriteProperty.Blink, 500)
let Level_1 = true
if (Level_1 == true) {
    for (let index = 0; index < 1e+100; index++) {
        basic.showLeds(`
            . . . . .
            . # # # #
            . # . . #
            . # . . #
            . . . # #
            `)
    }
} else if (Pac_Man.get(LedSpriteProperty.X) == 0 && Pac_Man.get(LedSpriteProperty.Y) == 0) {
    game.gameOver()
} else if (Pac_Man.get(LedSpriteProperty.X) == 0 && Pac_Man.get(LedSpriteProperty.Y) == 0) {
    game.gameOver()
} else if (Pac_Man.get(LedSpriteProperty.X) == 0 && Pac_Man.get(LedSpriteProperty.Y) == 0) {
    game.gameOver()
} else if (Pac_Man.get(LedSpriteProperty.X) == 0 && Pac_Man.get(LedSpriteProperty.Y) == 0) {
    game.gameOver()
} else if (Pac_Man.get(LedSpriteProperty.X) == 0 && Pac_Man.get(LedSpriteProperty.Y) == 0) {
    game.gameOver()
} else if (Pac_Man.get(LedSpriteProperty.X) == 0 && Pac_Man.get(LedSpriteProperty.Y) == 0) {
    game.gameOver()
} else if (Pac_Man.get(LedSpriteProperty.X) == 0 && Pac_Man.get(LedSpriteProperty.Y) == 0) {
    game.gameOver()
} else if (Pac_Man.get(LedSpriteProperty.X) == 0 && Pac_Man.get(LedSpriteProperty.Y) == 0) {
    game.gameOver()
} else if (Pac_Man.get(LedSpriteProperty.X) == 0 && Pac_Man.get(LedSpriteProperty.Y) == 0) {
    game.gameOver()
} else if (Pac_Man.get(LedSpriteProperty.X) == 0 && Pac_Man.get(LedSpriteProperty.Y) == 0) {
    game.gameOver()
}
Pac_Man = game.createSprite(4, 0)
Food_1 = game.createSprite(3, 0)
Food_2 = game.createSprite(2, 0)
Food_3 = game.createSprite(1, 0)
Food_4 = game.createSprite(0, 0)
Food_5 = game.createSprite(0, 1)
Food_6 = game.createSprite(0, 2)
Food_7 = game.createSprite(0, 3)
Food_8 = game.createSprite(0, 4)
Food_9 = game.createSprite(1, 4)
Food_10 = game.createSprite(2, 4)
Food_11 = game.createSprite(2, 3)
Food_12 = game.createSprite(2, 2)
Food_13 = game.createSprite(3, 3)
Food_14 = game.createSprite(3, 2)
if (game.score() == 14) {
    Level_1 = false
}
basic.forever(function () {
    if (Pac_Man.isTouching(Food_1)) {
        game.addScore(1)
        Food_1.delete()
    }
    if (Pac_Man.isTouching(Food_2)) {
        game.addScore(1)
        Food_2.delete()
    }
    if (Pac_Man.isTouching(Food_3)) {
        game.addScore(1)
        Food_3.delete()
    }
    if (Pac_Man.isTouching(Food_4)) {
        game.addScore(1)
        Food_4.delete()
    }
    if (Pac_Man.isTouching(Food_5)) {
        game.addScore(1)
        Food_5.delete()
    }
    if (Pac_Man.isTouching(Food_6)) {
        game.addScore(1)
        Food_6.delete()
    }
    if (Pac_Man.isTouching(Food_7)) {
        game.addScore(1)
        Food_7.delete()
    }
})
basic.forever(function () {
    if (Pac_Man.isTouching(Food_8)) {
        game.addScore(1)
        Food_8.delete()
    }
    if (Pac_Man.isTouching(Food_9)) {
        game.addScore(1)
        Food_9.delete()
    }
    if (Pac_Man.isTouching(Food_10)) {
        game.addScore(1)
        Food_10.delete()
    }
    if (Pac_Man.isTouching(Food_11)) {
        game.addScore(1)
        Food_11.delete()
    }
    if (Pac_Man.isTouching(Food_12)) {
        game.addScore(1)
        Food_12.delete()
        if (Pac_Man.isTouching(Food_13)) {
            game.addScore(1)
            Food_13.delete()
        }
    }
    if (Pac_Man.isTouching(Food_14)) {
        game.addScore(1)
        Food_14.delete()
    }
})
