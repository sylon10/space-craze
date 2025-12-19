const frames = [
        "frames/Title_Name_v2_1.png",
        "frames/Title_Name_v2_2.png",
        "frames/Title_Name_v2_3.png",
        "frames/Title_Name_v2_4.png",
        "frames/Title_Name_v2_5.png",
        "frames/Title_Name_v2_6.png",
        "frames/Title_Name_v2_7.png",
        "frames/Title_Name_v2_8.png",
        "frames/Title_Name_v2_9.png",
        "frames/Title_Name_v2_10.png",
        "frames/Title_Name_v2_11.png",
        "frames/Title_Name_v2_12.png",
        "frames/Title_Name_v2_13.png",
        "frames/Title_Name_v2_14.png",
        "frames/Title_Name_v2_15.png",
        "frames/Title_Name_v2_16.png"
    ];

    let index = 0;
    const img = document.getElementById("title-animation");

    setInterval(() => {
        index = (index + 1) % frames.length;
        img.src = frames[index];
    }, 150);
