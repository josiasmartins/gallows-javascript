const createSprite = seletor => {

    const $el = $(seletor);

    const frames = [
        'frame1', 'frame2', 'frame3', 'frame4', 'frame5',
        'frame6', 'frame7', 'frame8', 'frame9'
    ];

    let current = 0;
    const last = frames.length - 1;

    $el.addClass(frames[current]);

    const moveFrame = (from, to) => {

        $el.removeClass(from)
            .addClass(to);
    }

    const hasNext = () => current + 1 <= last;

    const nextFrame = () => {

        if (hasNext()) moveFrame(frames[current], frames[++current]);
    }

    const reset = () => {
        moveFrame(frames[current], frames[0]);
        current = 0;
    };

    const isFinished = () => !hasNext();

    return {
        nextFrame: nextFrame,
        reset: reset,
        isFinished: isFinished
    }

}

// const sprite = createSprite('.sprite');
// sprite.nextFrame();