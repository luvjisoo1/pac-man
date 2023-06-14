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
}
let Pac_Man = game.createSprite(4, 0)
let Food_1 = game.createSprite(3, 0)
let Food_2 = game.createSprite(2, 0)
let Food_3 = game.createSprite(1, 0)
let Food_4 = game.createSprite(0, 0)
let Food_5 = game.createSprite(0, 1)
let Food_6 = game.createSprite(0, 2)
let Food_7 = game.createSprite(0, 3)
let Food_8 = game.createSprite(0, 4)
let Food_9 = game.createSprite(1, 4)
let Food_10 = game.createSprite(2, 4)
let Food_11 = game.createSprite(2, 3)
let Food_12 = game.createSprite(2, 2)
let Food_13 = game.createSprite(3, 3)
let Food_14 = game.createSprite(3, 2)
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
if (game.score() == 14) {
	
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
