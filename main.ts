controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("B Was Pressed!!")
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("A Was Pressed!!")
})
scene.setBackgroundColor(2)
