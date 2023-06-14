def on_pin_pressed_p0():
    global a, b, c, d
    a = False
    b = False
    c = True
    d = False
    if c == True:
        for index in range(4):
            Pac_Man.change(LedSpriteProperty.Y, 1)
            basic.pause(1000)
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def on_button_pressed_a():
    global a, b, c, d
    a = True
    b = False
    c = False
    d = False
    if a == True:
        for index2 in range(4):
            Pac_Man.change(LedSpriteProperty.X, 1)
            basic.pause(1000)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global a, b, c, d
    a = False
    b = True
    c = False
    d = False
    if b == True:
        for index3 in range(4):
            Pac_Man.change(LedSpriteProperty.X, -1)
            basic.pause(1000)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_pin_pressed_p1():
    global a, b, c, d
    a = False
    b = False
    c = False
    d = True
    if d == True:
        for index4 in range(4):
            Pac_Man.change(LedSpriteProperty.Y, -1)
            basic.pause(1000)
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

d = False
c = False
b = False
a = False
Pac_Man: game.LedSprite = None
Level_1 = True
if Level_1 == True:
    for index5 in range(1e+100):
        basic.show_leds("""
            . . . . .
                        . # # # #
                        . # . . #
                        . # . . #
                        . . . # #
        """)
elif False and False:
    pass
elif False and False:
    pass
elif False and False:
    pass
elif False and False:
    pass
elif False and False:
    pass
elif False and False:
    pass
elif False and False:
    pass
elif False and False:
    pass
elif False and False:
    pass
elif False and False:
    pass
Pac_Man = game.create_sprite(4, 0)
Food_1 = game.create_sprite(3, 0)
Food_2 = game.create_sprite(2, 0)
Food_3 = game.create_sprite(1, 0)
Food_4 = game.create_sprite(0, 0)
Food_5 = game.create_sprite(0, 1)
Food_6 = game.create_sprite(0, 2)
Food_7 = game.create_sprite(0, 3)
Food_8 = game.create_sprite(0, 4)
Food_9 = game.create_sprite(1, 4)
Food_10 = game.create_sprite(2, 4)
Food_11 = game.create_sprite(2, 3)
Food_12 = game.create_sprite(2, 2)
Food_13 = game.create_sprite(3, 3)
Food_14 = game.create_sprite(3, 2)
Pac_Man.set(LedSpriteProperty.BLINK, 100)
Food_1.set(LedSpriteProperty.BLINK, 500)
Food_2.set(LedSpriteProperty.BLINK, 500)
Food_3.set(LedSpriteProperty.BLINK, 500)
Food_4.set(LedSpriteProperty.BLINK, 500)
Food_5.set(LedSpriteProperty.BLINK, 500)
Food_6.set(LedSpriteProperty.BLINK, 500)
Food_7.set(LedSpriteProperty.BLINK, 500)
Food_8.set(LedSpriteProperty.BLINK, 500)
Food_9.set(LedSpriteProperty.BLINK, 500)
Food_10.set(LedSpriteProperty.BLINK, 500)
Food_11.set(LedSpriteProperty.BLINK, 500)
Food_12.set(LedSpriteProperty.BLINK, 500)
Food_13.set(LedSpriteProperty.BLINK, 500)
Food_14.set(LedSpriteProperty.BLINK, 500)
if game.score() == 14:
    Level_1 = False

def on_forever():
    if Pac_Man.is_touching(Food_1):
        game.add_score(1)
        Food_1.delete()
    if Pac_Man.is_touching(Food_2):
        game.add_score(1)
        Food_2.delete()
    if Pac_Man.is_touching(Food_3):
        game.add_score(1)
        Food_3.delete()
    if Pac_Man.is_touching(Food_4):
        game.add_score(1)
        Food_4.delete()
    if Pac_Man.is_touching(Food_5):
        game.add_score(1)
        Food_5.delete()
    if Pac_Man.is_touching(Food_6):
        game.add_score(1)
        Food_6.delete()
    if Pac_Man.is_touching(Food_7):
        game.add_score(1)
        Food_7.delete()
basic.forever(on_forever)

def on_forever2():
    if Pac_Man.is_touching(Food_8):
        game.add_score(1)
        Food_8.delete()
    if Pac_Man.is_touching(Food_9):
        game.add_score(1)
        Food_9.delete()
    if Pac_Man.is_touching(Food_10):
        game.add_score(1)
        Food_10.delete()
    if Pac_Man.is_touching(Food_11):
        game.add_score(1)
        Food_11.delete()
    if Pac_Man.is_touching(Food_12):
        game.add_score(1)
        Food_12.delete()
        if Pac_Man.is_touching(Food_13):
            game.add_score(1)
            Food_13.delete()
    if Pac_Man.is_touching(Food_14):
        game.add_score(1)
        Food_14.delete()
basic.forever(on_forever2)
