/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/block.js":
/*!*****************************!*\
  !*** ./src/blocks/block.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   basic_1602lcd: () => (/* binding */ basic_1602lcd),
/* harmony export */   basic_a_Write: () => (/* binding */ basic_a_Write),
/* harmony export */   basic_analog_t: () => (/* binding */ basic_analog_t),
/* harmony export */   basic_button: () => (/* binding */ basic_button),
/* harmony export */   basic_flame: () => (/* binding */ basic_flame),
/* harmony export */   basic_led1: () => (/* binding */ basic_led1),
/* harmony export */   basic_led2: () => (/* binding */ basic_led2),
/* harmony export */   basic_led3: () => (/* binding */ basic_led3),
/* harmony export */   basic_led4: () => (/* binding */ basic_led4),
/* harmony export */   basic_light: () => (/* binding */ basic_light),
/* harmony export */   basic_matrix1: () => (/* binding */ basic_matrix1),
/* harmony export */   basic_matrix2: () => (/* binding */ basic_matrix2),
/* harmony export */   basic_matrix8: () => (/* binding */ basic_matrix8),
/* harmony export */   basic_matrix_clear: () => (/* binding */ basic_matrix_clear),
/* harmony export */   basic_matrix_init: () => (/* binding */ basic_matrix_init),
/* harmony export */   basic_motor: () => (/* binding */ basic_motor),
/* harmony export */   basic_potentiometer: () => (/* binding */ basic_potentiometer),
/* harmony export */   basic_rgb01: () => (/* binding */ basic_rgb01),
/* harmony export */   basic_seg1: () => (/* binding */ basic_seg1),
/* harmony export */   basic_seg4: () => (/* binding */ basic_seg4),
/* harmony export */   basic_tilt: () => (/* binding */ basic_tilt),
/* harmony export */   basic_tone: () => (/* binding */ basic_tone),
/* harmony export */   basic_w_buzzer1: () => (/* binding */ basic_w_buzzer1),
/* harmony export */   basic_w_buzzer2: () => (/* binding */ basic_w_buzzer2),
/* harmony export */   basic_w_buzzer3: () => (/* binding */ basic_w_buzzer3),
/* harmony export */   basic_y_buzzer: () => (/* binding */ basic_y_buzzer)
/* harmony export */ });
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blockly/core */ "blockly/core");
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_0__);


//////////////////颜色/////////////////////
const KIT_HUE = 120;


/********************************************
           //Arduino基础学习套件//
                //数字输出//
*********************************************/

/********************************************
                  *LED灯*
*********************************************/
const basic_led1 = {
    init: function () {
        this.setColour(KIT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_basic_LED1)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/basic_led1.png */ "./src/media/basic_led1.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_STAT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_OFF, "LOW"]]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};
const basic_led2 = {
    init: function () {
        this.setColour(KIT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_basic_LED2)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/basic_led2.png */ "./src/media/basic_led2.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_STAT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_OFF, "LOW"]]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};
const basic_led3 = {
    init: function () {
        this.setColour(KIT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_basic_LED3)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/basic_led3.png */ "./src/media/basic_led3.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_STAT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_OFF, "LOW"]]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

const basic_led4 = {
    init: function () {
        this.setColour(KIT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_basic_LED4)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/basic_led4.png */ "./src/media/basic_led4.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_STAT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_OFF, "LOW"]]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};
/********************************************
                 *PWM输出*
*********************************************/
const basic_a_Write = {
    init: function () {
        this.setColour(KIT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_basic_analog)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/basic_pwm.png */ "./src/media/basic_pwm.png"), 60, 32))
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendValueInput("num", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_VALUE2)
            .setCheck(Number);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_INOUT_ANALOG_WRITE);
    }
};

/********************************************
                  *rgb LED*
*********************************************/


const basic_rgb01 = {
    init: function () {
        this.setColour(KIT_HUE);
        this.appendDummyInput("")
            .appendField("RGB")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/basic_rgb.png */ "./src/media/basic_rgb.png"), 43, 32));
        this.appendValueInput("R", Number)
            .appendField("R")
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT);
        this.appendValueInput("r", Number)
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField("R(0~255):");
        this.appendValueInput("G", Number)
            .appendField("G")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .setCheck(Number);
        this.appendValueInput("g", Number)
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField("G(0~255):");
        this.appendValueInput("B", Number)
            .appendField("B")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .setCheck(Number);
        this.appendValueInput("b", Number)
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField("B(0~255):");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

/********************************************
                  *有源蜂鸣器*
*********************************************/
const basic_y_buzzer = {
    init: function () {
        this.setColour(KIT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_basic_BUZZER1)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/basic_buzzer.png */ "./src/media/basic_buzzer.png"), 39, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_STAT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_OFF, "LOW"]]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

/********************************************
                  *无源蜂鸣器*
*********************************************/
const basic_w_buzzer1 = {
    init: function () {
        this.setColour(KIT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_basic_BUZZER2)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/basic_pbuzzer.png */ "./src/media/basic_pbuzzer.png"), 39, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_STAT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_OFF, "LOW"]]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};
//////////////////蜂鸣器//////////////////
var TONE_NOTES = [
    ["NOTE_C3", "131"], ["NOTE_D3", "147"], ["NOTE_E3", "165"], ["NOTE_F3", "175"], ["NOTE_G3", "196"], ["NOTE_A3", "220"], ["NOTE_B3", "247"],
    ["NOTE_C4", "262"], ["NOTE_D4", "294"], ["NOTE_E4", "330"], ["NOTE_F4", "349"], ["NOTE_G4", "392"], ["NOTE_A4", "440"], ["NOTE_B4", "494"],
    ["NOTE_C5", "532"], ["NOTE_D5", "587"], ["NOTE_E5", "659"], ["NOTE_F5", "698"], ["NOTE_G5", "784"], ["NOTE_A5", "880"], ["NOTE_B5", "988"]
];


const basic_tone = {
    init: function () {
        this.setColour(KIT_HUE);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown(TONE_NOTES), 'STAT');
        this.setOutput(true, Number);
    }
};

const basic_w_buzzer2 = {
    init: function () {
        this.setColour(KIT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_basic_BUZZER2)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/basic_pbuzzer.png */ "./src/media/basic_pbuzzer.png"), 39, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendValueInput('FREQUENCY')
            .setCheck(Number)
            //.setAlign(Blockly.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_FREQUENCY);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};
const basic_w_buzzer3 = {
    init: function () {
        this.setColour(KIT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_basic_BUZZER2)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/basic_pbuzzer.png */ "./src/media/basic_pbuzzer.png"), 39, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendValueInput('FREQUENCY')
            .setCheck(Number)
            //.setAlign(Blockly.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_FREQUENCY);
        this.appendValueInput('DURATION')
            .setCheck(Number)
            //.setAlign(Blockly.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DURATION);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

/********************************************
                  *电机*
*********************************************/
const basic_motor = {
    init: function () {
        this.setColour(KIT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_basic_MOTOR)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/basic_motor.png */ "./src/media/basic_motor.png"), 39, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_STAT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_OFF, "LOW"]]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};
/********************************************
                  数字传感器
                  *火焰传感*
*********************************************/
const basic_flame = {
    init: function () {
        this.setColour(KIT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_basic_FLAME)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/basic_fire.png */ "./src/media/basic_fire.png"), 50, 40));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setOutput(true, Boolean);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};

/********************************************
                  *按键开关*
*********************************************/
const basic_button = {
    init: function () {
        this.setColour(KIT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_basic_BUTTON)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/basic_button.png */ "./src/media/basic_button.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setOutput(true, Boolean);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};

/********************************************
                  *倾斜开关*
*********************************************/
const basic_tilt = {
    init: function () {
        this.setColour(KIT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_basic_TILT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/basic_qingxie.png */ "./src/media/basic_qingxie.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setOutput(true, Boolean);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};


/********************************************
                  模拟传感器
                  *模拟温度*
*********************************************/
const basic_analog_t = {
    init: function () {
        this.setColour(KIT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_basic_ANALOG_T)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/basic_temp.png */ "./src/media/basic_temp.png"), 39, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip('');
    }
};


/********************************************
                  *光线传感*
*********************************************/
const basic_light = {
    init: function () {
        this.setColour(KIT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_basic_LIGHT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/basic_guangmin.png */ "./src/media/basic_guangmin.png"), 37, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip('');
    }
};


/********************************************
                  *电位器*
*********************************************/
const basic_potentiometer = {
    init: function () {
        this.setColour(KIT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_basic_POTENTIOMETER)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/basic_dianweiqi.png */ "./src/media/basic_dianweiqi.png"), 37, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip('');
    }
};
/********************************************
                 显示屏
              *1位数码管*
*********************************************/
const basic_seg1 = {
    init: function () {
        this.setColour(KIT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_basic_SMG)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/basic_1seg.png */ "./src/media/basic_1seg.png"), 37, 32));

        this.appendValueInput("num")
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_basic_value);

        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

/********************************************
                  *4位数码管*
*********************************************/
const basic_seg4 = {
    init: function () {
        this.setColour(KIT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_basic_TM1637)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/basic_4seg.png */ "./src/media/basic_4seg.png"), 37, 32));

        this.appendValueInput("num")
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_basic_value);

        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};



/********************************************
                  *1602LCD*
*********************************************/
const basic_1602lcd = {
    init: function () {
        this.setColour(KIT_HUE);
        this.appendDummyInput("")
            .appendField("LCD1602")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/basic_lcd1602.png */ "./src/media/basic_lcd1602.png"), 70, 32));
        this.appendValueInput("TEXT1", String)
            .setCheck([String, Number])
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_PRINT1);
        this.appendValueInput("TEXT2", String)
            .setCheck([String, Number])
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_PRINT2)
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};


/********************************************
                  *8*8点阵*
*********************************************/
const basic_matrix_init = {
    init: function () {
        this.setColour(KIT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_basic_Matrix_init)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/basic_matrix.png */ "./src/media/basic_matrix.png"), 40, 40));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};
//执行器_点阵屏显示_显示图案
const basic_matrix1 = {
    init: function () {
        this.setColour(KIT_HUE);
        this.appendDummyInput("").appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_basic_Matrix_custom).appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/basic_matrix.png */ "./src/media/basic_matrix.png"), 40, 40));
        this.appendValueInput("LEDArray").setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT).appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DISPLAY_MATRIX_PICARRAY);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        //this.setTooltip();
    }
};
//执行器_点阵屏显示_图案数组
const basic_matrix2 = {
    init: function () {
        this.setColour(KIT_HUE);
        this.appendDummyInput("").appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DISPLAY_MATRIX_ARRAYVAR).appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput("LedArray1"), "VAR");
        this.appendDummyInput("").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a81").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a82").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a83").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a84").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a85").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a86").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a87").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a88");
        this.appendDummyInput("").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a71").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a72").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a73").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a74").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a75").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a76").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a77").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a78");
        this.appendDummyInput("").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a61").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a62").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a63").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a64").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a65").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a66").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a67").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a68");
        this.appendDummyInput("").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a51").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a52").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a53").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a54").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a55").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a56").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a57").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a58");
        this.appendDummyInput("").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a41").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a42").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a43").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a44").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a45").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a46").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a47").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a48");
        this.appendDummyInput("").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a31").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a32").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a33").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a34").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a35").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a36").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a37").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a38");
        this.appendDummyInput("").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a21").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a22").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a23").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a24").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a25").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a26").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a27").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a28");
        this.appendDummyInput("").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a11").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a12").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a13").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a14").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a15").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a16").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a17").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a18");
        this.setOutput(true, Number);
        //this.setTooltip();
    }
};

const basic_matrix8 = {
    init: function () {
        this.setColour(KIT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_basic_Matrix_char)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/basic_matrix.png */ "./src/media/basic_matrix.png"), 40, 40));
        this.appendValueInput("num")
            .setCheck([String, Number])
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_basic_Matrix_dis);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

const basic_matrix_clear = {
    init: function () {
        this.setColour(KIT_HUE);
        this.appendDummyInput("")
            .appendField("matrix8*8 清屏")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/basic_matrix.png */ "./src/media/basic_matrix.png"), 40, 40));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

/***/ }),

/***/ "./src/generators/generator.js":
/*!*************************************!*\
  !*** ./src/generators/generator.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   basic_1602lcd: () => (/* binding */ basic_1602lcd),
/* harmony export */   basic_a_Write: () => (/* binding */ basic_a_Write),
/* harmony export */   basic_analog_t: () => (/* binding */ basic_analog_t),
/* harmony export */   basic_button: () => (/* binding */ basic_button),
/* harmony export */   basic_flame: () => (/* binding */ basic_flame),
/* harmony export */   basic_led1: () => (/* binding */ basic_led1),
/* harmony export */   basic_led2: () => (/* binding */ basic_led2),
/* harmony export */   basic_led3: () => (/* binding */ basic_led3),
/* harmony export */   basic_led4: () => (/* binding */ basic_led4),
/* harmony export */   basic_light: () => (/* binding */ basic_light),
/* harmony export */   basic_matrix1: () => (/* binding */ basic_matrix1),
/* harmony export */   basic_matrix2: () => (/* binding */ basic_matrix2),
/* harmony export */   basic_matrix8: () => (/* binding */ basic_matrix8),
/* harmony export */   basic_matrix_clear: () => (/* binding */ basic_matrix_clear),
/* harmony export */   basic_matrix_init: () => (/* binding */ basic_matrix_init),
/* harmony export */   basic_motor: () => (/* binding */ basic_motor),
/* harmony export */   basic_potentiometer: () => (/* binding */ basic_potentiometer),
/* harmony export */   basic_rgb01: () => (/* binding */ basic_rgb01),
/* harmony export */   basic_seg1: () => (/* binding */ basic_seg1),
/* harmony export */   basic_seg4: () => (/* binding */ basic_seg4),
/* harmony export */   basic_tilt: () => (/* binding */ basic_tilt),
/* harmony export */   basic_w_buzzer1: () => (/* binding */ basic_w_buzzer1),
/* harmony export */   basic_w_buzzer2: () => (/* binding */ basic_w_buzzer2),
/* harmony export */   basic_w_buzzer3: () => (/* binding */ basic_w_buzzer3),
/* harmony export */   basic_y_buzzer: () => (/* binding */ basic_y_buzzer)
/* harmony export */ });
//////////////////LED灯////////////////
const basic_led1 = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var dropdown_stat = this.getFieldValue('STAT');
    generator.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    var code = 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n'
    return code;
};

const basic_led2 = basic_led1;
const basic_led3 = basic_led1;
const basic_led4 = basic_led1;

const basic_a_Write = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var value_num = generator.valueToCode(this, 'NUM', generator.ORDER_ATOMIC);
    generator.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    var code = 'analogWrite(' + dropdown_pin + ',' + value_num + ');\n'
    return code;
};
//////////////////////////RGB//////////////////////////////
const basic_rgb01 = function (_, generator) {
    var dropdown_pin1 = generator.valueToCode(this, 'R', generator.ORDER_ATOMIC);
    var value_r = generator.valueToCode(this, 'r', generator.ORDER_ATOMIC);

    var dropdown_pin2 = generator.valueToCode(this, 'G', generator.ORDER_ATOMIC);
    var value_g = generator.valueToCode(this, 'g', generator.ORDER_ATOMIC);

    var dropdown_pin3 = generator.valueToCode(this, 'B', generator.ORDER_ATOMIC);
    var value_b = generator.valueToCode(this, 'b', generator.ORDER_ATOMIC);

    generator.setups_['setup_output_' + dropdown_pin1] = 'pinMode(' + dropdown_pin1 + ', OUTPUT);';
    generator.setups_['setup_output_' + dropdown_pin2] = 'pinMode(' + dropdown_pin2 + ', OUTPUT);';
    generator.setups_['setup_output_' + dropdown_pin3] = 'pinMode(' + dropdown_pin3 + ', OUTPUT);';

    var code = 'analogWrite(' + dropdown_pin1 + ',' + value_r + ');\nanalogWrite(' + dropdown_pin2 + ',' + value_g + ');\nanalogWrite(' + dropdown_pin3 + ',' + value_b + ');\n';
    return code;
};

//////////////////////////有源蜂鸣器//////////////////////////////

const basic_y_buzzer = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var dropdown_stat = this.getFieldValue('STAT');
    generator.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    var code = 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n'
    return code;
};
//////////////////////////无源蜂鸣器//////////////////////////////
const basic_w_buzzer1 = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var dropdown_stat = this.getFieldValue('STAT');
    generator.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    var code = 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n'
    return code;
};

const basic_w_buzzer2 = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var fre = generator.valueToCode(this, 'FREQUENCY',
        generator.ORDER_ASSIGNMENT) || '0';
    var code = "tone(" + dropdown_pin + "," + fre + ");\n";
    generator.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    return code;
};

const basic_w_buzzer3 = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var fre = generator.valueToCode(this, 'FREQUENCY',
        generator.ORDER_ASSIGNMENT) || '0';
    var dur = generator.valueToCode(this, 'DURATION',
        generator.ORDER_ASSIGNMENT) || '0';
    var code = "tone(" + dropdown_pin + "," + fre + "," + dur + ");\n";
    generator.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    return code;
};

//////////////////////////电机//////////////////////////////
const basic_motor = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var dropdown_stat = this.getFieldValue('STAT');
    generator.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    var code = 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n'
    return code;
};

//////////////////////////数字传感器////////////////////////////////

const basic_button = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    generator.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
    var code = 'digitalRead(' + dropdown_pin + ')';
    return [code, generator.ORDER_ATOMIC];
};
/////////////////火焰传感器////////////////
const basic_flame = basic_button;

/////////////////倾斜传感器////////////////
const basic_tilt = basic_button;


//////////////////////模拟传感器/////////////////////////

const basic_light = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    generator.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
    var code = 'analogRead(' + dropdown_pin + ')';
    return [code, generator.ORDER_ATOMIC];
};

const basic_analog_t = basic_light;

const basic_potentiometer = basic_light;


//////////////////////////显示屏///////////////////



///////////////////////////1位数码管/////////////////
const basic_seg1 = function (_, generator) {
    var num = generator.valueToCode(this, 'num', generator.ORDER_ATOMIC);

    generator.definitions_['abc'] = 'int a=7,b=6,c=5,d=10,e=11,f=8,g=9,dp=4;';
    generator.definitions_['val3'] = 'int val=' + num + ';';

    generator.definitions_['digital_0'] = 'void digital_0(void)\n{\nunsigned char j;\ndigitalWrite(a,HIGH);\ndigitalWrite(b,HIGH);\ndigitalWrite(c,HIGH);\ndigitalWrite(d,HIGH);\ndigitalWrite(e,HIGH);\ndigitalWrite(f,HIGH);\ndigitalWrite(g,LOW);\ndigitalWrite(dp,LOW);\n}\n';

    generator.definitions_['digital_1'] = 'void digital_1(void)\n{\nunsigned char j;\ndigitalWrite(c,HIGH);\ndigitalWrite(b,HIGH);\nfor(j=7;j<=11;j++)\ndigitalWrite(j,LOW);\ndigitalWrite(dp,LOW);\n}\n';
    generator.definitions_['digital_2'] = 'void digital_2(void)\n{\nunsigned char j;\ndigitalWrite(b,HIGH);\ndigitalWrite(a,HIGH);\nfor(j=9;j<=11;j++)\ndigitalWrite(j,HIGH);\ndigitalWrite(dp,LOW);\ndigitalWrite(c,LOW);\ndigitalWrite(f,LOW);\n}\n';
    generator.definitions_['digital_3'] = 'void digital_3(void)\n{digitalWrite(g,HIGH);\ndigitalWrite(a,HIGH);\ndigitalWrite(b,HIGH);\ndigitalWrite(c,HIGH);\ndigitalWrite(d,HIGH);\ndigitalWrite(dp,LOW);\ndigitalWrite(f,LOW);\ndigitalWrite(e,LOW);\n}\n';
    generator.definitions_['digital_4'] = 'void digital_4(void) \n{digitalWrite(c,HIGH);\ndigitalWrite(b,HIGH);\ndigitalWrite(f,HIGH);\ndigitalWrite(g,HIGH);\ndigitalWrite(dp,LOW);\ndigitalWrite(a,LOW);\ndigitalWrite(e,LOW);\ndigitalWrite(d,LOW);\n}\n';
    generator.definitions_['digital_5'] = 'void digital_5(void)\n{\nunsigned char j;\ndigitalWrite(a,HIGH);\ndigitalWrite(b, LOW);\ndigitalWrite(c,HIGH);\ndigitalWrite(d,HIGH);\ndigitalWrite(e, LOW);\ndigitalWrite(f,HIGH);\ndigitalWrite(g,HIGH);\ndigitalWrite(dp,LOW);\n}\n';
    generator.definitions_['digital_6'] = 'void digital_6(void) \n{\nunsigned char j;\nfor(j=7;j<=11;j++)\ndigitalWrite(j,HIGH);\ndigitalWrite(c,HIGH);\ndigitalWrite(dp,LOW);\ndigitalWrite(b,LOW);\n}\n';
    generator.definitions_['digital_7'] = 'void digital_7(void)\n{\nunsigned char j;\nfor(j=5;j<=7;j++)\ndigitalWrite(j,HIGH);\ndigitalWrite(dp,LOW);\nfor(j=8;j<=11;j++)\ndigitalWrite(j,LOW);\n}\n';
    generator.definitions_['digital_8'] = 'void digital_8(void)\n{\nunsigned char j;\nfor(j=5;j<=11;j++)\ndigitalWrite(j,HIGH);\ndigitalWrite(dp,LOW);\n}\n';
    generator.definitions_['digital_9'] = 'void digital_9(void)\n{\nunsigned char j;\ndigitalWrite(a,HIGH);\ndigitalWrite(b,HIGH);\ndigitalWrite(c,HIGH);\ndigitalWrite(d,HIGH);\ndigitalWrite(e, LOW);\ndigitalWrite(f,HIGH);\ndigitalWrite(g,HIGH);\ndigitalWrite(dp,LOW);\n}\n';

    generator.setups_['setup_input'] = 'int i;\nfor(i=4;i<=11;i++)\npinMode(i,OUTPUT);\n';

    var code = 'switch(val)\n  {\n    case 0:digital_0();break;\n    case 1:digital_1();break;\n    case 2:digital_2();break;\n    case 3:digital_3();break;\n    case 4:digital_4();break;\n    case 5:digital_5();break;\n    case 6:digital_6();break;\n    case 7:digital_7();break;\n    case 8:digital_8();break;\n   case 9:digital_9();break;\n  }\n';
    return code;
};

///////////////////////////4位数码管/////////////////
const basic_seg4 = function (_, generator) {
    var num = generator.valueToCode(this, 'num', generator.ORDER_ATOMIC);
    //var tc = generator.valueToCode(this, 'tc', generator.ORDER_ATOMIC);
    generator.definitions_['include_SevSeg-master'] = '#include "SevSeg.h"';
    generator.definitions_['sevseg'] = 'SevSeg sevseg;';
    generator.definitions_['val4'] = 'int val=' + num + ';';
    generator.definitions_['numDigits'] = 'byte numDigits = 4;';
    generator.definitions_['digitPins'] = 'byte digitPins[] = {2, 3, 4, 5};';
    generator.definitions_['segmentPins'] = 'byte segmentPins[] = {6, 7, 8, 9, 10, 11, 12, 13};';
    generator.definitions_['hardwareConfig'] = 'byte hardwareConfig = COMMON_CATHODE ; ';

    generator.setups_['setup_input'] = 'sevseg.begin(hardwareConfig, numDigits, digitPins, segmentPins);\n';

    var code = 'sevseg.setNumber(' + num + ', -1); \nsevseg.refreshDisplay();\n';
    return code;
};



////////////////////////1602LCD///////////////////////////
const basic_1602lcd = function (_, generator) {
    var str1 = generator.valueToCode(this, 'TEXT1', generator.ORDER_ATOMIC) || 'String("")';
    var str2 = generator.valueToCode(this, 'TEXT2', generator.ORDER_ATOMIC) || 'String("")';


    generator.definitions_['DRE'] = 'int DI = 12,RW = 11,Enable = 2;';
    generator.definitions_['DB'] = 'int DB[] = {3, 4, 5, 6, 7, 8, 9, 10};';
    generator.definitions_['STR'] = 'char *string = "0";';
    generator.definitions_['LcdCommandWrite'] = 'void LcdCommandWrite(int value) \n{\nint i = 0;\nfor (i=DB[0]; i <= DI; i++) \n{\ndigitalWrite(i,value & 01);\nvalue >>= 1;\n}\ndigitalWrite(Enable,LOW);\ndelayMicroseconds(1);\ndigitalWrite(Enable,HIGH);\ndelayMicroseconds(1); \ndigitalWrite(Enable,LOW);\ndelayMicroseconds(1); \n}\n';
    generator.definitions_['LcdDataWrite'] = 'void LcdDataWrite(int value) \n{\nint i = 0;\ndigitalWrite(DI, HIGH); \ndigitalWrite(RW, LOW); \nfor (i=DB[0]; i <= DB[7]; i++) \n{\ndigitalWrite(i,value & 01);\nvalue >>= 1;\n}\ndigitalWrite(Enable,LOW);  \ndelayMicroseconds(1);\ndigitalWrite(Enable,HIGH); \ndelayMicroseconds(1);\ndigitalWrite(Enable,LOW); \ndelayMicroseconds(1); \n}\n';
    //generator.definitions_['LcdStringWrite'] = 'void LcdStringWrite(char *a)\n{\nfor(int i = 0;i < 14; i++)\n{\nif(*(a+i) == '\0')\n {\nbreak;\n}\nLcdDataWrite(*(a+i));\n}\n}\n';
    generator.definitions_['lsw'] = 'void LcdStringWrite(char *a)\n{\nfor(int i = 0;i < strlen(a); i++){\nLcdDataWrite(*(a+i));\n}\n}\n';

    generator.setups_['setup_lcd'] = 'int i = 0;\nfor (i=Enable; i <= DI; i++) \n{\n    pinMode(i,OUTPUT);\n}\ndelay(100);\nLcdCommandWrite(0x38);\ndelay(64);  \nLcdCommandWrite(0x38); \ndelay(50);  \nLcdCommandWrite(0x38); \ndelay(20);  \nLcdCommandWrite(0x06); \ndelay(20);  \nLcdCommandWrite(0x0E);\ndelay(20);  \nLcdCommandWrite(0x01);  \ndelay(100); \nLcdCommandWrite(0x80); \ndelay(20);  \n';

    var code = 'LcdCommandWrite(0x01); \ndelay(10); \nLcdCommandWrite(0x80+0); \ndelay(10); \nstring = ' + str1 + ';\nLcdStringWrite(string);\ndelay(10);\nLcdCommandWrite(0xc0+0); \n string = ' + str2 + ';\nLcdStringWrite(string);\ndelay(10);\ndelay(300);';

    return code;
};

////////////////////////////////点阵////////////////////////////
const basic_matrix_init = function (_, generator) {
    generator.definitions_['matrix_var'] = 'unsigned char data_clear[]={0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};\n' +
        'unsigned char data_0[]={0x00,0x38,0x44,0x44,0x44,0x44,0x38,0x00};\n' +
        'unsigned char data_1[]={0x38,0x10,0x10,0x10,0x10,0x10,0x30,0x10};\n' +
        'unsigned char data_2[]={0x7c,0x20,0x10,0x08,0x04,0x44,0x38,0x00};\n' +
        'unsigned char data_3[]={0x38,0x44,0x04,0x38,0x04,0x44,0x38,0x00};\n' +
        'unsigned char data_4[]={0x08,0x08,0x08,0x7e,0x48,0x28,0x10,0x08};\n' +
        'unsigned char data_5[]={0x00,0x78,0x04,0x04,0x78,0x40,0x7c,0x40};\n' +
        'unsigned char data_6[]={0x00,0x38,0x44,0x44,0x78,0x20,0x10,0x0c};\n' +
        'unsigned char data_7[]={0x00,0x20,0x20,0x10,0x08,0x04,0x7e,0x00};\n' +
        'unsigned char data_8[]={0x38,0x44,0x44,0x38,0x44,0x44,0x38,0x00};\n' +
        'unsigned char data_9[]={0x38,0x44,0x04,0x3c,0x44,0x44,0x38,0x00};';

    generator.definitions_['DC'] = 'void clear_(void)\n' +
        '{\n' +
        '  for(int i=2;i<10;i++)\n' +
        '  digitalWrite(i, LOW);\n' +
        '  for(int i=0;i<8;i++)\n' +
        '  digitalWrite(i+10, HIGH);\n' +
        '}\n';

    generator.definitions_['DP'] = 'void Draw_point(unsigned char x,unsigned char y)\n' +
        '{\n' +
        '  clear_();\n' +
        '  digitalWrite(x+1, HIGH);\n' +
        '  digitalWrite(y+10, LOW);\n' +
        '  delay(1);\n' +
        '}\n';

    generator.definitions_['SN'] = 'void show_num(unsigned char matrix_data[])\n' +
        '{\n' +
        '  unsigned char i,j,data;\n' +
        '  for(i=8;i>0;i--)\n' +
        '  {\n' +
        '    data=matrix_data[i];\n' +
        '    for(j=8;j>0;j--)\n' +
        '    {\n' +
        '      if(data & 0x01)Draw_point(j,i);\n' +
        '      data>>=1;\n' +
        '    }\n' +
        '  }\n' +
        '}\n';

    generator.setups_['setup_matrix'] = 'for(int i=2;i<18;i++)\n' +
        '  {\n' +
        '    pinMode(i, OUTPUT);\n' +
        '  }\n' +
        '  clear_();\n';

    return '';
};

const basic_matrix8 = function (_, generator) {
    var matrix_data = generator.valueToCode(this, 'num', generator.ORDER_ATOMIC);

    return 'show_num(data_' + matrix_data + ');';
};

////////////////////////////////点阵1////////////////////////////
//执行器_点阵屏显示_显示图案
const basic_matrix1 = function (_, generator) {
    var dotMatrixArray = generator.valueToCode(this, 'LEDArray', generator.ORDER_ASSIGNMENT);

    return 'show_num(data_' + dotMatrixArray + ');';
};
//执行器_点阵屏显示_点阵数组
const basic_matrix2 = function (_, generator) {
    var varName = this.getFieldValue('VAR');
    var a = new Array();
    for (let i = 1; i < 9; i++) {
        a[i] = new Array();
        for (let j = 1; j < 9; j++) {
            a[i][j] = (this.getFieldValue('a' + i + j) == "TRUE") ? 1 : 0;
        }
    }
    var code = '{';
    for (let i = 1; i < 9; i++) {
        var tmp = ""
        for (let j = 1; j < 9; j++) {
            tmp += a[i][j];
        }
        tmp = (parseInt(tmp, 2)).toString(16)
        if (tmp.length == 1) tmp = "0" + tmp;
        code += '0x' + tmp + ((i != 8) ? ',' : '');
    }
    code += '};';
    //generator.definitions_[this.id] = "byte LedArray_"+clearString(this.id)+"[]="+code;
    generator.definitions_[varName] = "unsigned char data_" + varName + "[8]=" + code;
    //return ["LedArray_"+clearString(this.id), generator.ORDER_ATOMIC];
    return [varName, generator.ORDER_ATOMIC];
};

const basic_matrix_clear = function () {
    return 'clear_();';
};

/***/ }),

/***/ "./src/language/en.js":
/*!****************************!*\
  !*** ./src/language/en.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EnCatgories: () => (/* binding */ EnCatgories),
/* harmony export */   EnMsg: () => (/* binding */ EnMsg)
/* harmony export */ });
const EnMsg = {};

EnMsg.MIXLY_basic_LED1 = 'Blue_LED';
EnMsg.MIXLY_basic_LED2 = 'Red_LED';
EnMsg.MIXLY_basic_LED3 = 'Yellow_LED';
EnMsg.MIXLY_basic_LED4 = 'Green_LED';
EnMsg.MIXLY_basic_analog = 'analogWrite';
EnMsg.MIXLY_basic_LED4 = 'Yellow_LED';
EnMsg.MIXLY_basic_LED5 = 'Blue Piranha LED';
EnMsg.MIXLY_basic_LED01 = 'Straw cap LED';
EnMsg.MIXLY_basic_LED02 = 'Red Straw cap LED';
EnMsg.MIXLY_basic_LED03 = 'Green Straw cap LED';
EnMsg.MIXLY_basic_LED04 = 'Yellow straw cap LED';
EnMsg.MIXLY_basic_LED05 = 'Blue Straw cap LED';
EnMsg.MIXLY_basic_BUZZER1 = 'Active buzzer';
EnMsg.MIXLY_basic_BUZZER2 = 'Passive Buzzer';
EnMsg.MIXLY_basic_RELAY = 'Relay';
EnMsg.MIXLY_basic_MOTOR = 'Motor';
EnMsg.MIXLY_basic_SERVO = 'servo';
EnMsg.MIXLY_basic_2812RGB = '2812RGB Module';

EnMsg.MIXLY_basic_IR_G = 'PIR Module';
EnMsg.MIXLY_basic_FLAME = 'Flame Sensor';
EnMsg.MIXLY_basic_HALL = 'Hall Sensor';
EnMsg.MIXLY_basic_CRASH = 'Crash Sensor';
EnMsg.MIXLY_basic_BUTTON = 'Button switch';
EnMsg.MIXLY_basic_TUOCH = 'Capacitive Touch';
EnMsg.MIXLY_basic_KNOCK = 'Knock Module';
EnMsg.MIXLY_basic_TILT = 'Tilt switch';
EnMsg.MIXLY_basic_SHAKE = 'Vibration Module';
EnMsg.MIXLY_basic_REED_S = 'Reed Switch Module';
EnMsg.MIXLY_basic_TRACK = 'Tracking Module';
EnMsg.MIXLY_basic_AVOID = 'Obstacle Avoidance Module';
EnMsg.MIXLY_basic_LIGHT_B = 'Light Interrupt Module';

EnMsg.MIXLY_basic_ANALOG_T = 'Analog Temperature Sensor';
EnMsg.MIXLY_basic_SOUND = 'Sound Sensor';
EnMsg.MIXLY_basic_LIGHT = 'Light Sensor';
EnMsg.MIXLY_basic_WATER = 'Water Level Sensor';
EnMsg.MIXLY_basic_SOIL = 'Soil Sensor';
EnMsg.MIXLY_basic_POTENTIOMETER = 'potentiometer';
EnMsg.MIXLY_basic_LM35 = 'LM35 Temperature Sensor';
EnMsg.MIXLY_basic_SLIDE_POTENTIOMETER = 'slide potentiometer';
EnMsg.MIXLY_basic_TEMT6000 = 'TEMT6000 Ambient Light';
EnMsg.MIXLY_basic_STEAM = 'water vapor sensor';
EnMsg.MIXLY_basic_FILM_P = 'Thin-film Pressure Sensor';
EnMsg.MIXLY_basic_JOYSTICK = 'Joystick Module';
EnMsg.MIXLY_basic_SMOKE = 'Smoke Sensor';
EnMsg.MIXLY_basic_ALCOHOL = 'Alcohol Sensor';
EnMsg.MIXLY_basic_MQ135 = 'MQ135 Air Quality';
EnMsg.MIXLY_basic_18B20 = '18B20 Temperature Module';
EnMsg.MIXLY_basic_RT = 'temperature';

EnMsg.MIXLY_basic_DHT11 = 'temperature and humidity module';
EnMsg.MIXLY_basic_BMP180 = 'BMP180 altimeter module';
EnMsg.MIXLY_basic_T = 'temperature';
EnMsg.MIXLY_basic_QY = 'barometric pressure';
EnMsg.MIXLY_basic_H = 'altitude';

EnMsg.MIXLY_basic_SR01 = 'SR01 Ultrasound Module';
EnMsg.MIXLY_basic_3231 = 'DS3231 clock';
EnMsg.MIXLY_basic_ADXL345 = 'Acceleration Module';

EnMsg.MIXLY_basic_CARD1 = 'card1';
EnMsg.MIXLY_basic_CARD2 = 'card2';

EnMsg.MIXLY_basic_16button = '4*4button';


EnMsg.MIXLY_basic_OLED = 'OLED Module';
EnMsg.MIXLY_basic_1602LCD = 'IIC1602LCD';
EnMsg.MIXLY_basic_2004LCD = 'IIC2004LCD';
EnMsg.MIXLY_basic_MATRIX = '8*8 dot matrix';
EnMsg.MIXLY_basic_TM1637 = '4 digit 8-segment LED digital';
EnMsg.MIXLY_basic_SMG = '1 digit 8-segment LED digital';
EnMsg.MIXLY_basic_ws = 'digit';
EnMsg.MIXLY_basic_begin = 'Display position';
EnMsg.MIXLY_basic_fill0 = 'add 0?';
EnMsg.MIXLY_basic_light = 'Brightness0~7';
EnMsg.MIXLY_basic_XY = 'Show or hide';
EnMsg.MIXLY_basic_L = 'left';
EnMsg.MIXLY_basic_R = 'right';
EnMsg.MIXLY_basic_MH = 'colon';
EnMsg.MIXLY_basic_one = 'print line1';
EnMsg.MIXLY_basic_two = 'print line2';
EnMsg.MIXLY_basic_three = 'print line3';
EnMsg.MIXLY_basic_four = 'print line4';


EnMsg.MIXLY_basic_value = 'value';


EnMsg.MIXLY_basic_IR_E = 'Infrared Transmitter Module';
EnMsg.MIXLY_basic_IR_R = 'Infrared Receiver Module';
EnMsg.MIXLY_basic_W5100 = 'W5100 Ethernet Module';
EnMsg.MIXLY_basic_BLUETOOTH = 'Bluetooth 2.0 Module';
EnMsg.MIXLY_basic_rec = 'Received';


//EnMsg.MIXLY_basic_kzsc = 'Control output';

EnMsg.MIXLY_basic_Count = 'count';

EnMsg.MIXLY_basic_Matrix_init = 'Matrix 8*8 Init';
EnMsg.MIXLY_basic_Matrix_custom = 'Matrix custom display';
EnMsg.MIXLY_basic_Matrix_char = 'Matrix Display a single character';
EnMsg.MIXLY_basic_Matrix_dis = 'display';

const EnCatgories = {};

/***/ }),

/***/ "./src/language/zh-hans.js":
/*!*********************************!*\
  !*** ./src/language/zh-hans.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZhHansCatgories: () => (/* binding */ ZhHansCatgories),
/* harmony export */   ZhHansMsg: () => (/* binding */ ZhHansMsg)
/* harmony export */ });
const ZhHansMsg = {};

ZhHansMsg.MIXLY_basic_LED1 = '蓝色LED';
ZhHansMsg.MIXLY_basic_LED2 = '红色LED';
ZhHansMsg.MIXLY_basic_LED3 = '黄色LED';
ZhHansMsg.MIXLY_basic_LED4 = '绿色LED';
ZhHansMsg.MIXLY_basic_analog = '模拟输出';
ZhHansMsg.MIXLY_basic_LED01 = '草帽LED';
ZhHansMsg.MIXLY_basic_LED02 = '红色草帽LED';
ZhHansMsg.MIXLY_basic_LED03 = '绿色草帽LED';
ZhHansMsg.MIXLY_basic_LED04 = '黄色草帽LED';
ZhHansMsg.MIXLY_basic_LED05 = '蓝色草帽LED';
ZhHansMsg.MIXLY_basic_BUZZER1 = '有源蜂鸣器';
ZhHansMsg.MIXLY_basic_BUZZER2 = '无源蜂鸣器';
ZhHansMsg.MIXLY_basic_RELAY = '继电器';
ZhHansMsg.MIXLY_basic_MOTOR = '电机风扇';
ZhHansMsg.MIXLY_basic_SERVO = '舵机';
ZhHansMsg.MIXLY_basic_2812RGB = '2812RGB模块';

ZhHansMsg.MIXLY_basic_IR_G = '人体红外热模块';
ZhHansMsg.MIXLY_basic_FLAME = '火焰传感器';
ZhHansMsg.MIXLY_basic_HALL = '霍尔传感器';
ZhHansMsg.MIXLY_basic_CRASH = '碰撞传感器';
ZhHansMsg.MIXLY_basic_BUTTON = '按键';
ZhHansMsg.MIXLY_basic_TUOCH = '电容触摸';
ZhHansMsg.MIXLY_basic_KNOCK = '敲击模块';
ZhHansMsg.MIXLY_basic_TILT = '倾斜模块';
ZhHansMsg.MIXLY_basic_SHAKE = '振动模块';
ZhHansMsg.MIXLY_basic_REED_S = '干簧管模块';
ZhHansMsg.MIXLY_basic_TRACK = '循迹模块';
ZhHansMsg.MIXLY_basic_AVOID = '避障模块';
ZhHansMsg.MIXLY_basic_LIGHT_B = '光折断模块';

ZhHansMsg.MIXLY_basic_ANALOG_T = '模拟温度传感器';
ZhHansMsg.MIXLY_basic_SOUND = '声音传感器';
ZhHansMsg.MIXLY_basic_LIGHT = '光线传感器';
ZhHansMsg.MIXLY_basic_WATER = '水位传感器';
ZhHansMsg.MIXLY_basic_SOIL = '土壤传感器';
ZhHansMsg.MIXLY_basic_POTENTIOMETER = '电位器';
ZhHansMsg.MIXLY_basic_LM35 = 'LM35温度传感器';
ZhHansMsg.MIXLY_basic_SLIDE_POTENTIOMETER = '滑动电位器';
ZhHansMsg.MIXLY_basic_TEMT6000 = 'TEMT6000环境光';
ZhHansMsg.MIXLY_basic_STEAM = '水蒸气传感器';
ZhHansMsg.MIXLY_basic_FILM_P = '薄膜压力传感器';
ZhHansMsg.MIXLY_basic_JOYSTICK = '遥杆模块';
ZhHansMsg.MIXLY_basic_SMOKE = '烟雾传感器';
ZhHansMsg.MIXLY_basic_ALCOHOL = '酒精传感器';
ZhHansMsg.MIXLY_basic_MQ135 = 'MQ135空气质量';

ZhHansMsg.MIXLY_basic_18B20 = '18B20温度模块';
ZhHansMsg.MIXLY_basic_RT = '温度';

ZhHansMsg.MIXLY_basic_DHT11 = '温湿度模块';
ZhHansMsg.MIXLY_basic_BMP180 = 'BMP180高度计模块';
ZhHansMsg.MIXLY_basic_T = '温度';
ZhHansMsg.MIXLY_basic_QY = '大气压';
ZhHansMsg.MIXLY_basic_H = '高度';

ZhHansMsg.MIXLY_basic_SR01 = 'SR01超声波模块';
ZhHansMsg.MIXLY_basic_3231 = 'DS3231时钟';
ZhHansMsg.MIXLY_basic_ADXL345 = '加速度模块';

ZhHansMsg.MIXLY_basic_YEAR = '年';
ZhHansMsg.MIXLY_basic_MONTH = '月';
ZhHansMsg.MIXLY_basic_DAY = '天';
ZhHansMsg.MIXLY_basic_TEXT = '周';
ZhHansMsg.MIXLY_basic_HOUR = '时';
ZhHansMsg.MIXLY_basic_MINUTE = '分';
ZhHansMsg.MIXLY_basic_SECOND = '秒';
ZhHansMsg.MIXLY_basic_GET = '获取时间';

ZhHansMsg.MIXLY_basic_CARD1 = '卡1';
ZhHansMsg.MIXLY_basic_CARD2 = '卡2';

ZhHansMsg.MIXLY_basic_16button = '4*4按钮键盘';


ZhHansMsg.MIXLY_basic_OLED = 'OLED模块';
ZhHansMsg.MIXLY_basic_1602LCD = 'IIC1602LCD';
ZhHansMsg.MIXLY_basic_2004LCD = 'IIC2004LCD';
ZhHansMsg.MIXLY_basic_MATRIX = '8*8点阵';
ZhHansMsg.MIXLY_basic_TM1637 = '4位8段数码管';
ZhHansMsg.MIXLY_basic_SMG = '1位8段数码管';
ZhHansMsg.MIXLY_basic_ws = '位数';
ZhHansMsg.MIXLY_basic_begin = '显示的位置';
ZhHansMsg.MIXLY_basic_fill0 = '是否补充0';
ZhHansMsg.MIXLY_basic_light = '亮度0~7';
ZhHansMsg.MIXLY_basic_XY = '显或隐';
ZhHansMsg.MIXLY_basic_L = '左边';
ZhHansMsg.MIXLY_basic_R = '右边';
ZhHansMsg.MIXLY_basic_MH = '冒号';
ZhHansMsg.MIXLY_basic_one = '第一行';
ZhHansMsg.MIXLY_basic_two = '第二行';
ZhHansMsg.MIXLY_basic_three = '第三行';
ZhHansMsg.MIXLY_basic_four = '第四行';

ZhHansMsg.MIXLY_basic_value = '数值';

ZhHansMsg.MIXLY_basic_IR_E = '红外发射模块';
ZhHansMsg.MIXLY_basic_IR_R = '红外接收模块';
ZhHansMsg.MIXLY_basic_W5100 = 'W5100以太网模块';
ZhHansMsg.MIXLY_basic_BLUETOOTH = '蓝牙2.0模块';
ZhHansMsg.MIXLY_basic_rec = '接收到的信号';

ZhHansMsg.MIXLY_basic_kzsc = '控制输出';

ZhHansMsg.MIXLY_basic_Count = '灯号';

ZhHansMsg.MIXLY_basic_Matrix_init = '8*8点阵初始化';
ZhHansMsg.MIXLY_basic_Matrix_custom = '8*8点阵自定义显示';
ZhHansMsg.MIXLY_basic_Matrix_char = '8*8点阵显示单个字符';
ZhHansMsg.MIXLY_basic_Matrix_dis = '显示';

const ZhHansCatgories = {};

/***/ }),

/***/ "./src/language/zh-hant.js":
/*!*********************************!*\
  !*** ./src/language/zh-hant.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZhHantCatgories: () => (/* binding */ ZhHantCatgories),
/* harmony export */   ZhHantMsg: () => (/* binding */ ZhHantMsg)
/* harmony export */ });
const ZhHantMsg = {};

ZhHantMsg.MIXLY_basic_LED1 = '蓝色LED';
ZhHantMsg.MIXLY_basic_LED2 = '红色LED';
ZhHantMsg.MIXLY_basic_LED3 = '黄色LED';
ZhHantMsg.MIXLY_basic_LED4 = '绿色LED';
ZhHantMsg.MIXLY_basic_analog = '模拟输出';
ZhHantMsg.MIXLY_basic_LED4 = '黃色食人魚LED';
ZhHantMsg.MIXLY_basic_LED5 = '藍色食人魚LED';
ZhHantMsg.MIXLY_basic_LED01 = '草帽LED';
ZhHantMsg.MIXLY_basic_LED02 = '紅色草帽LED';
ZhHantMsg.MIXLY_basic_LED03 = '綠色草帽LED';
ZhHantMsg.MIXLY_basic_LED04 = '黃色草帽LED';
ZhHantMsg.MIXLY_basic_LED05 = '藍色草帽LED';
ZhHantMsg.MIXLY_basic_BUZZER1 = '有源蜂鳴器';
ZhHantMsg.MIXLY_basic_BUZZER2 = '無源蜂鳴器';
ZhHantMsg.MIXLY_basic_RELAY = '繼電器';
ZhHantMsg.MIXLY_basic_MOTOR = '電機';
ZhHantMsg.MIXLY_basic_SERVO = '舵機';
ZhHantMsg.MIXLY_basic_2812RGB = '2812RGB模塊';

ZhHantMsg.MIXLY_basic_IR_G = '人體紅外熱模塊';
ZhHantMsg.MIXLY_basic_FLAME = '火焰傳感器';
ZhHantMsg.MIXLY_basic_HALL = '霍爾傳感器';
ZhHantMsg.MIXLY_basic_CRASH = '碰撞傳感器';
ZhHantMsg.MIXLY_basic_BUTTON = '按鍵';
ZhHantMsg.MIXLY_basic_TUOCH = '電容觸摸';
ZhHantMsg.MIXLY_basic_KNOCK = '敲擊模塊';
ZhHantMsg.MIXLY_basic_TILT = '傾斜模塊';
ZhHantMsg.MIXLY_basic_SHAKE = '振動模塊';
ZhHantMsg.MIXLY_basic_REED_S = '幹簧管模塊';
ZhHantMsg.MIXLY_basic_TRACK = '循跡模塊';
ZhHantMsg.MIXLY_basic_AVOID = '避障模塊';
ZhHantMsg.MIXLY_basic_LIGHT_B = '光折斷模塊';

ZhHantMsg.MIXLY_basic_ANALOG_T = '模擬溫度傳感器';
ZhHantMsg.MIXLY_basic_SOUND = '聲音傳感器';
ZhHantMsg.MIXLY_basic_LIGHT = '光線傳感器';
ZhHantMsg.MIXLY_basic_WATER = '水位傳感器';
ZhHantMsg.MIXLY_basic_SOIL = '土壤傳感器';
ZhHantMsg.MIXLY_basic_POTENTIOMETER = '電位器';
ZhHantMsg.MIXLY_basic_LM35 = 'LM35溫度傳感器';
ZhHantMsg.MIXLY_basic_SLIDE_POTENTIOMETER = '滑動電位器';
ZhHantMsg.MIXLY_basic_TEMT6000 = 'TEMT6000環境光';
ZhHantMsg.MIXLY_basic_STEAM = '水蒸氣傳感器';
ZhHantMsg.MIXLY_basic_FILM_P = '薄膜壓力傳感器';
ZhHantMsg.MIXLY_basic_JOYSTICK = '遙桿模塊';
ZhHantMsg.MIXLY_basic_SMOKE = '煙霧傳感器';
ZhHantMsg.MIXLY_basic_ALCOHOL = '酒精傳感器';
ZhHantMsg.MIXLY_basic_MQ135 = 'MQ135空氣質量';
ZhHantMsg.MIXLY_basic_18B20 = '18B20溫度模塊';
ZhHantMsg.MIXLY_basic_RT = '获取温度';

ZhHantMsg.MIXLY_basic_DHT11 = '溫濕度模塊';
ZhHantMsg.MIXLY_basic_BMP180 = 'BMP180高度計模塊';
ZhHantMsg.MIXLY_basic_T = '温度';
ZhHantMsg.MIXLY_basic_QY = '大气压';
ZhHantMsg.MIXLY_basic_H = '高度';

ZhHantMsg.MIXLY_basic_SR01 = 'SR01超聲波模塊';
ZhHantMsg.MIXLY_basic_3231 = '3231時鐘';
ZhHantMsg.MIXLY_basic_ADXL345 = '加速度模塊';

ZhHantMsg.MIXLY_basic_CARD1 = '卡1';
ZhHantMsg.MIXLY_basic_CARD2 = '卡2';

ZhHantMsg.MIXLY_basic_16button = '4*4按钮键盘';


ZhHantMsg.MIXLY_basic_OLED = 'OLED模塊';
ZhHantMsg.MIXLY_basic_1602LCD = 'IIC1602LCD';
ZhHantMsg.MIXLY_basic_2004LCD = 'IIC2004LCD';
ZhHantMsg.MIXLY_basic_MATRIX = '8*8點陣';

ZhHantMsg.MIXLY_basic_TM1637 = '4位8段數碼管';
ZhHantMsg.MIXLY_basic_SMG = '1位8段数码管';
ZhHantMsg.MIXLY_basic_ws = '位数';
ZhHantMsg.MIXLY_basic_value = '数值';
ZhHantMsg.MIXLY_basic_begin = '显示的位置';
ZhHantMsg.MIXLY_basic_fill0 = '是否补充0';
ZhHantMsg.MIXLY_basic_light = '亮度0~7';
ZhHantMsg.MIXLY_basic_XY = '显或隐';
ZhHantMsg.MIXLY_basic_L = '左边';
ZhHantMsg.MIXLY_basic_R = '右边';
ZhHantMsg.MIXLY_basic_MH = '冒号';
ZhHantMsg.MIXLY_basic_one = '第一行';
ZhHantMsg.MIXLY_basic_two = '第二行';
ZhHantMsg.MIXLY_basic_three = '第三行';
ZhHantMsg.MIXLY_basic_four = '第四行';


ZhHantMsg.MIXLY_basic_IR_E = '紅外發射模塊';
ZhHantMsg.MIXLY_basic_IR_R = '紅外接收模塊';
ZhHantMsg.MIXLY_basic_W5100 = 'W5100以太網模塊';
ZhHantMsg.MIXLY_basic_BLUETOOTH = '藍牙2.0模塊';
ZhHantMsg.MIXLY_basic_rec = '接收到的信号';

ZhHantMsg.MIXLY_basic_Count = '灯号';

ZhHantMsg.MIXLY_basic_Matrix_init = '8*8点阵初始化';
ZhHantMsg.MIXLY_basic_Matrix_custom = '点阵自定义显示';
ZhHantMsg.MIXLY_basic_Matrix_char = '8*8点阵显示单个字符';
ZhHantMsg.MIXLY_basic_Matrix_dis = '显示';

const ZhHantCatgories = {};

/***/ }),

/***/ "./src/media/basic_1seg.png":
/*!**********************************!*\
  !*** ./src/media/basic_1seg.png ***!
  \**********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/basic_4seg.png":
/*!**********************************!*\
  !*** ./src/media/basic_4seg.png ***!
  \**********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAoCAYAAABzXJ2PAAAACXBIWXMAAA7fAAAO3wFVDDfZAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAB3pJREFUaIHtmn2MXVUVxX+7M+3wVT5qsVjakgqCRRCtkKgRjIoCKRIQbYkR/wArSkpQKSBRA6L+YYkKZGobQwhUKNpYSEVIAwixtFqqISa2GpRaRAIZW2qHTqffs/xjn+ecOb3v3nNf3wsNmZVM5t53zlt33f3O2ffsdY8BSOoCzgGOYhSdwEtm9iKASZoEPAWc8eZqektDwHwz+7FJWghcC/QDfwqNo2gfTgRmAHuAU5D0khzz32Rhb0lIOk7DuKIbmBLadkWdTgS+AJwAHBE+3kb16F8HjAceMrM9BRc/FfgsMBE4EhgA9lZwDgB/AA4zs8cKOKcGrW+PtP63ghPgefx+Hjaz/QW8pwOfA94G9ABDeBaowl+A181sZTgfjNrGE0V/XrjQJEl9qo8BSb3heEXBDbw79KmLZyWtCsffTjgnS9rcAme/pAXh+FcFWt8raWcLvJskrQvHNwaunqh97piCX+hSfLTUxTLgwnB8iaQTkvbP46O6LlYBHw7HX07aLsFnS108hN8nwGWSUl1XAIe1wLsMODscp1oBKAr4OmAOcAfwR/KmJ8BzwMnReRrwx/F0cjfwZ2B7Ju8g0NWEcx3wceC7wD8y+QB+D7wrHI8BxiXtTwbenwL/qcG7A7AmWgHoLvjsi8DXgE3A7WZ2n6SjgWl4LuvG8zTAboZz1AcTHkvOb8AD/jxwk5k9KWkC/gwZi990Y6TtxJ8pAuaVcF6Nr7A2ArfiP+oE4Niim41wTEX7AuADwGpgFvBv4Ojw1wxDQLzwSLUCxQFvYDpwj6SnzexlYH2ZQkmXl7VHmAk8Kuk4M9sKbK3gnZbBeTJwHzDNzDZWdZZ0UQanAecCy83sJKAvg7dSa1FKidEFnJYhDuDwzH7gM2V8Za96vN0Mp4kqpCmkDBNq9K3UWhVwGM6fVRib2a+Bng7w5mqtE/A6fSu15gT8gDVqE9QRBvmrgDq8ndA6TlJhPm6FNyfgBxQwTZA7uhrY1wHeXK1lz64i5M6ySq3tDHhdD2ZXdZfavJ0KeG76q9TazoBXlegpcgNeh7dTszF3hFdqzQn47syLlS4bE/SZWW5BVYc3V+vmGpyD5HkokKG1KOBD0fELwN8yL7aU8rVqzPvrTE7wyrTZwzDmXA+8mMn5NOVBjGfKA0XmVhPcmWg6AEW5bEf43wdcD/xQUs6aeT3ulzyGr0DSfNbgfQ1YIamX6qk6BPwW+Doe+GacrwJXAbfI3cOcmXsTsCj0TYPUKOefA+6XdBfVqyoBa4Bv4pVqYT4vCvg9eOX2S+DnwPEZ4hv4DXABcBvwr6StF7+5VbjJcwR5+Erguxb4UNL2M9zgvx+fYafU0LoEuA64yMzS0b4IeAUv7Z8iv/i6Br/PLwGfLOwRWYfzos/GSVrYgj0pSRdKKhwNgXdFC5z7JU0t4g2cC8q/3hTnSjpg7SzJJI2VtLIFziFJpzV4VWXPSjoDN2vWAH/N+l2HsQQ4D3hF0jsS3gsC3yLcpK+DO4HFwFpJ/9csaSbwMj4S17bA+Rlgg6R0BH8adx8Xk+GhJPgBcAuwWgUFU1FKmY374UuCoO00X0bFK403cB/59nD+fjxfNzAHT1W/AD6CeylHUZzr+hnOq2/g0/RT4XwCsCXSOglYjj8//tlEZ4qtuCt6WzifzsjBNRs4CXgQOJ/mPv7+oK+BLcCPgIaRN5505RQN98Ybn3ujzyqdt4jnLEl7o+/OStqfiNqeqcE7N5myx0dtD0SfZ89GeXraHX33PUn776K2Jw5C6zGVKYWRJfc7JU3PvN5syiu4mPejco89lzeHc4akyZmcp1Lue8S850nKrUyvrOpQFXDwl6g5qBIV8xr5BlLujwj5WqsQ8/aQb7RV/jBFAU/L49zlWxVS3rp2bg7noawVKA54+hCr82KhDClvXQMph/NQ1grkVWTtuokUbbuJCIe81pyAdyIw0JktdW2b+p1CTsBLX/IeBDoR8E5pbRuqAv46vs0sB3UCuIWRRVE7ePvwfTTtxmY8DjkYrOpQli7WAHcBV4b17UTKp+wLGYL6cUNsJXBNKGIm0rySFb4/5mMlnAKeBRYCVwVLoYxzCDe6qrANN8WeAb4aaW32fnMAtwM+UUZaFPBleDl/aTjOxXy81G12o4vx4M1h5OaeKtxa0rYUtxcuw93NXKzGA99shvcCf8e1Xl+D9xtVHYouOAn4DnBmjQuB25FxyZ6+VZkB3Ijv4KqDyQx7J7sYuUVuCvAt4PSanLPwvfDgM2RL0n4mvlNsCvUwNdK3m6LXiAVeSpek5aqPfZJukFupdytxyiQdLt8JWxcbJC2WtEPS3ISzW9KjLXAOSvq+3E+5uSAmR0pa2wLva5KWymNxc+Aa4aWYpF14+XqdmfWGToa7ZOdQvp8uxhCeNvaZ2atFHeTW6sXA+8ivCgcD7x4z21bAabiTeDb5u7n2AvcC280sHd0N3i7cpj2L/PX9TtwN3WNmmwJPD8Mj/WokbQzR/4kKzPhRHBwkzYxG+MUm6Q5G7vocRWcwAEwZA3wPeIT8LQajqIf9wAZgtpn1/w8lcRngMdxCxwAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/media/basic_button.png":
/*!************************************!*\
  !*** ./src/media/basic_button.png ***!
  \************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAApCAYAAABDV7v1AAAACXBIWXMAAA7fAAAO3wFVDDfZAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABOxJREFUWIW1mWuIVlUUhp89k+U1u6pdTIoIM9KylMAuYCUY5qWoqNAgIugeRhlWkgRWP6IEqTAkjf5adrEsTYmiBiwogxJJAi+Tlqg1OhqjPf04++vbM55zvuP4uf6cs/d+11rvXvty9ton0EDUvsD1wDRgNHAOMBTo00i3QLqAncA2YAPwIfBFCOFgr6ypA9Rn1L0ef9mjzlX7F/EJBSRvBJYBZyXV+4CvYiTagQO9igD0BYYBw4GrgcFJWztwTwhhTUMr6mNqV9LbNnVqnAJNFbWPOkldm/jrUh9tpPh4ovC3epeaG/XjQHqKuivx341sSIA3kU3sVmALMCWE8FNFJ/2AK4FzyRbaAGA78AewIYSwraKd84GPgVHA4chhVQoYqP6eRHJ0BaMt6h3qcnVfyUL5V/1enacOrWB3hLoj6u5UT04bX0gM31nB2GT1xwJie6ODPOlQ56uDGtifmOjMr1UOSCLyrSVz0mzyv9HD+Qb1OfUysylQw56oXqg+pK6Oka3JJvXiBmTfTzrXH/XWxMDUEsVT1HUJ9lf19rKO9dC/Ql3TI/KTSvDjE+wM1HcS5rlbkNqqrkwUl6sDqhDMsXW/9e2vUx1XgAvqlohbivpdLHxeYnxhQnKR2tIbkom9mxOyW9VhBbhaENdjfbUvKQCPtz6/PlNbj4VkYvfhpPNLCzALYns76qFYeKkA/GVs/1M9tRkkE9u1BXNYHZPT/mxsP9RCtsFDtsH2BF4HXBuLC0IIe5pJFJhDdppqAebmtNd2kdZGc+2W+NwLvN4cbnUJIWwClsfiTUWLGbKe5IrZtjMtFj8JIfzTPIrd5L34HAjcUAQqi+hQYER8/7RJpPJkFWB8n1AEKiOankV/q+pVHafea/qNLpEQQgewOxYvKMJVJdpexak6FmgDlgArq+j0sD+4CFBGtDfn0PGJzQnqCRX1ajqF66CM6K7k/cyjdAhZR6t2dkh87i4ClBHdTH2SX17R4VGLejb1QPxchCskGkLYBWyMxYnNo3aEpCeotiJQow2/ti1NU884Zkr5MjM+dwDfFIEaEX2LbPhPAmY3h1dd1Kuoj9ayEMIRn/GalBINIWwkS/gAZqsXNYdili0Ab8ZiJ/BqGb6F+mGk6Pj2BHCQLKofqIV73VHKQqB2YpoXQtiZg/n/wNRCltJCfYvoJiGEzcBTsTgSWFH1q5Mn8eT+CvBArFoLvFYArx2od2CWyqqubuBgSXLQ/UG9JAfzoN2lT4/2IepHSfsv6mklPms51nrUd2OhwySLzFFqVRcnTg6qL6pDEkwhUbW/9RxIsxQodxQT/P6IXYp6W6I8rUgxKgd1tnog0dmvzqhAdLD1m8HFNkgO1RmJnem1W5LOWNFmhfRXHWX3rHRRrL8vqeuyR36lnme1W5igro92srw+NrycOLi7kaHE4Fj1SfX0WB5u/ZZkaVU7OXZnJXyeTxsGJQ46qvS6xMlAdWSVkSnQH2P95maHPa9/1Olm2aBmk/7S3pLtrUSSW5Opk3+Tos5JQt6hzuxtZI6SYIjDnd4KPtJIaY71XN84qWdYsnUdA8F+cSTXJ/668kgW3eFPBt4mS/Bq0gl8TXbJu53e3+H3I/uzMhy4Bkh/MGwHZoUQ1la2FhfFPPUvj7/sVp8uG7Uqe2Y/sv9MU2nuf6atZP+ZVgDrGt0b/AcpT3tcjIzcswAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/media/basic_buzzer.png":
/*!************************************!*\
  !*** ./src/media/basic_buzzer.png ***!
  \************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAqCAYAAAATZhM+AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA6xJREFUaIHVmU2oVVUYhp9vZ5mmlUglCmaFDYrSBtGgwP6gTGwgZcMalNAkJw1qFjQIyUmDBg2iQAqR0sJBgmQUVBQV/QyKJOnHupZpFF01r96nwV7Ls1vKvZ6ffc7tmXxrr2+ttd/37H3WWntvaAn1cvVj9YT6iXpHW+caGuoW/8uk+rK6cNTaekbd65k5pG4Ytb6eSOKnYpd6xah1doV6eBpTqkfUp9RzR633rDhLU5nP1RvbErJWfXxAY3VjSnVCfU6dN4jzZxFL1OPpBNcOYLxuTWX2qXcNwhPq02nQH9RZAxivV1OZbeql/QiYpR5Igz3Rr6EBmTKNsUGNbs6dr8gq4DLgJPBSIW4hsAXYExGbB2G4CxYALwDz1ElgzRRt/wA2RcSn2dS6FN+PiF+LxhuB1cAyYNimMhcCi4A7p2m3Wl1R5YMU32y2sF4/8ur/ysAktsc8YGOlLgLyyv5e0SjflpPAi82Eul4dVx9sXWp3rKqAm9LBMeDLosG9KX4YEQdyZbqCm4C51LflTGJxBeSV/LOIOF40uCXF3UX9GmozfwPPtyavN+ZXwJXp4JtmRp0LXJcOPyo63p/i9oj4vT19vVEBS1L55yJ3NZ0p/4sid2uKb7Ujqz8qYHEql6ay2Qng1DSvXtLoU17BGUFFPf8DjBW5LHwsIiYb9UtTPAn81KK2nqmAOal8tMjNTvFYUZ930Ucj4kRbwvqhapQtctnk+UX9kRTndrsnGxYVHZHlc0yun1PUH2z0nZGP4xVwOJUXFLk8VS9U5+fKiPiezv/v5lbV9UhFR+DSIvdto82KIvdBive1pKsvKmBvKi8vcj/SmcpvKHLbUlzrAJ6SB00FfJ3KK5uJiJDOBvf2ot8O4DsggIda1NcTFZ1b6Zq0sDbZnuLd6kW5MiImgEeBr4Bdravskop6V/AP9a9+W5HfCfxJPa0/0kxExO6IuD4i3h6G0C44p4qIY8CeVLG+mY2IcerHaYCHh6msD8by4rs1xXuat1liM/AO8NrQZPXHzrwLfwMYBy6gfnx/NreIiIOcPlEMmwnqdXPfFG2OAu8CT56qsX47qrpfPa9fFQN6RXZI3Wiv7yHVZdavflVXTt+jVVPHrX/ki/vVkV+mPOYANqp9mHpdvapvM23Qg6m96urpRx4hXZgat/5GNXv6UUfMWZraoZYb6ZmL+tcUZn5THxi1xq6x/iR0JrZ6+h7z/4H6amHmF3Xd9D1nMOpy66+CB9VnbDw9t82/WP6f2FQQVyEAAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/media/basic_dianweiqi.png":
/*!***************************************!*\
  !*** ./src/media/basic_dianweiqi.png ***!
  \***************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAwCAYAAACfbhNRAAAACXBIWXMAAA7fAAAO3wFVDDfZAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAh9JREFUWIXtmDtrFVEUhb8TohgDQXxiYSDB0tLGwkJFbRSClSKI9iK+Wn+AFgpapAgoWKiYwkLBxt7OR2UliIgSAoGARtSYz2Lm4Dh3Zu7MNeIUs+Aym7P2YzFnn32GCw2h7rEaZ5vmHGoa8C8w/JfxZ4DF1J4BNv0PEU9DCHMA6q1Bk7RiOzoREZ2IiE5ERCciohMR0YmIaIWIyqtcHQdO5JbHM/YD9Xtqb06fB9XRXMyPEML1gRSq+/p8ytXF56o6TT5qXgE/gRFgssLvE7CQ2huBiQY1epF7ExsGiD9Z5020ojFbIWJYvVjB78zY05mTUBexH9ZU1QmqDROvOrKnYw5YyvHrgO2rUEfgXW5tPbAtYX9jahWK1VelU7FwKxqzVIS6S72t3lP3lvicUmfVG+rWAn5CnVYfqkdKVRRthzqkfsxwS+pYLm5/bjTPFuR+meGX1ckMV2s7stw3kpFdxgMUHd+QsZfTXw8K744Qwop6CDiXJroZQviS83mmngYOk3T+tYJUx4DLwCgwE0J4X1SvOx0R2Yk5D3xN7TGSYTJPby/8EQ9sIdnrhQo/gLUkV/tiWmckjW3P2D5fsH6F5K+fu8CLivgdwKXUvkAynstwFDgAvAbu9FWmvk175ngfv92Zxq7sL/Vq2TxpRWN2IiI6ERGdiIgyESu5ZxkiX2fqlvqWibgPfACe90n8hmSiPgoh9BP8hOQuepwnfgE9ureW18gfxwAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/media/basic_fire.png":
/*!**********************************!*\
  !*** ./src/media/basic_fire.png ***!
  \**********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAA4CAYAAAAB8vOKAAAACXBIWXMAAA7fAAAO3wFVDDfZAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAvpJREFUWIW9mEtsDVEcxr8zfWiEVqJEX/SKoJGqDfFqtJE0Fg0WJA02QiI2EolEWIjEQggWEhYWVnYSuzYW2BESUQua0IU+ElRFaJqgqj+LmVtz587cmTt37nybe+bM9z+/ex5z5j9HSkBAJTAAVCTRXlRoBlsn04R2O9AxYEGY30qIm3F+WyQdTQu6ylU+DZg0oK2u8lpJW9OAZjzXoUNcsoBRcjUFLCwnsAqYJV+9QTFJDO9KSX6bQk85oesC6gMXUxLQ/QH17WXZFp0994vPfGbV4BdXak97JC0rcH9FOaBnQu5XJwoFNkvqjhNbSk/PR/B8K6H9XAFdBRZPVnPA4qSAFcDrCNDRoDbiDO8JSR0RfEOJQIEWSZcj2nOgQDWwvGiopDuSaouFYqcwzyWNA0sj04BjEebRre2u2ONO3UcgWkeB9cB0kdCME2sBb526a1GBNcBgkUCAZif+oKtud1TozRhAgI3OH37jXM8BS6IA9znmOHoMPHFdf4oCbAYmYwL9NJht23clYb9870mqjzQH0TRVECp7M9+VIFBy5VF5UOzn60LCQMn1bs2BAnWyh7WyDND5LMLb09vKz9aTUhPOF908FDgi6VCZgFlW6zwUWCTpahmBWW2bh0o6J8k3XUxYXZJkgBpJnyXVpQD9YIxZbUnqTQkoSRmgxZK0NyVgVjstSe0pQzstSWtShrZZkqpShjZZkn6nDG20JI2EmF5ICkycY8iyJL0MMfVJ6pQ0mRB0xpI0UMAwZowZMcaMS7qeEPSrJalf0rsAw4irfEvSRALQYcsY80vSYUkzPoaf2YIxZlrSpQSg/6cTOOuTTHm/R6qAVyUmaDvcDVrkpowAf4BaD7gDmIkJfI/3sBJoJP+05JR3fICLMaF9vgMO7AH+uozDeM6DsIf5aZHAuwVnGrjiCTjg42nA/gqLokeEnXg7PXnmCvJdtcAm4HsI8CF2OhQuoB7oB4aADQV8ncAPH9gscAPwPUsqWUAb8MCBTwD3gS1B/n+2vv2IqvG2SwAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/media/basic_guangmin.png":
/*!**************************************!*\
  !*** ./src/media/basic_guangmin.png ***!
  \**************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/basic_lcd1602.png":
/*!*************************************!*\
  !*** ./src/media/basic_lcd1602.png ***!
  \*************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnYAAAEbCAYAAABX1sngAAAACXBIWXMAAB7CAAAewgFu0HU+AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAIABJREFUeJzt3XlwHNd9J/Dv6+45Mbhv8BLv+xBJUZJ1maRESZSctWJTsmPFXtlZx07s3TgpH5L8h7diy/ZmY+/WVhKvLotWdFCk5Eha24luyXEqkSVb4n0AvEAcxDEABsBcfbz9AwAFAt2D6QE0g2l+P1Uq2piZ33s93YP54nW/12LBfZslitTnqlZjrq/U1WveT3Th/8VO2j72qYoVWByocFXvaCqKZ/uP2z52V8UKLHFbLxnFswNO9ZZjSaDSVb1jqT7s6z+Wl3qfrVqNeS73x/5kN14caLF9bFfFcixz2b/jqT7sdejfpVbv7sqVWOAvd1XvYLIHzw80O/RvGZYFqlzVO5HqwzMO/ftkxXIsd7m9zak+7HGo94nyZVgRdNe/5lQ/9vQfzUu9T1euxCKX++Nwqhc/7z/h6jVEdGlTCt0BIiIiIpoZDHZEREREHsFgR0REROQRWq4v9AsV8/2lqFADKFF8CAgVCWli2EzjnD6EbiMBiaK9fI+IiIjoQ1OpBjDHV4oSxYcy1Q9LAnFpoNdIoE0fxLCl51TXdbBbGqjEhlAdFvnLoQnnAb9hU8f+ZDfeTZzHgJnKqXO50E0TR9o6E4oixIrGxqCmiunVs0wcae1IKYrAiqamwHTrGaaFw+1tSUARq+Y0BjRleoOmadPCkba2pCoUZeWcRr86zXrj+metmtMYnm7/RvdHUhGQK5qaQtN+/6SJo23nk5Y0sXrO3KCqzNj+mMHt7UioioIVTQ2hGdsflrBWzWuafv8sE0fOdSaFlHLl3DnT3h+6ZeJoW2dSSmDVnKZpf94My8KRto6UBUuunjMnOCP7o+N8EtJSVjXN8c9E/462dyYtaVmr5szM/jjadj4JacmVc6a/P4hodvMLFVtKGrEyUIU6LZzxuef0QbyX6MLBRC9MWFm3kXWwa/KVYHtkAeb7y7J6fonqw9UlTdgSbsB/xDvxr8PnoMvsO5aLl9472P3s7jd1ackmAFA1pe2P/2RH5CMrl7ibijbq5fcP9Ty7+03dMq3G0Xrtd/+XHZFrVizJ7k2Y4PX3j/bu2f1aeny9uz6/rfSjq1e4m0o66qX3D3U9+9gbxoXt9asdd3/hxrJrViwtyal/B4727fnpa8mx/imqcu6PvrA9dP3q5dW51Htl/5Hovp++lrTG+qcqbXd//saSa9YsczdVeNS//O5g93OPv2lIS4717/ynP789dMOa5TntjzcOHOl/+qevxy3Tahqt1/bpe7YHb1ib2/a+tP9Q73M/fTNpWdYcYPR4+fyN4WtW57a9bxw82v/0o6+N71/7p+/ZHsi1f68dOBp95qevJSxztH+q0v5Hn78xeN2aZe6mfo56/cCx7j2Pvpoet70dn7pne/iGNctz+ry9efDYwFM/fXXYMi5sb8ed/3lrYNu6lTn179UDR3r2/vT1pGVac0f7d/5T92wruWHNikgu9d46dLz/yUdeGR57/xRVab/zcx8NbFu/Kqf98frBY9E9j746bJnWvNF6nZ++Z1vghrUr3E0VJqJZTxHAplAjro3MQVhkF73m+kox11eKj5TMwSuDp3Ei1Z9dW9k8aUOoDp+tWp11qBtPFQo+UtKEL1StRY0acv36bP329JnBfT99o3ws5ACAaVhzHvvJPweOtnW6HjJ85/SZwb2Pvl42FnJG6zXt/od/Dhw91+G63nunW4eeevSV0on1nnzwFf/+1nbX462/PXW6f9+jr1dctL1ps3H3P/yL71hbh+G23oG2tvhTD78SGt8/y7Tm/uODL0cOtJ6Lu633u9bWoWceeTVsje+fac3Z/dBLoSPnOpJu6/1H86nYs7vfqBgLdaP9q3/ioZcDB86cS7utt/9cW+LJh18NjoWm0Xpznnj45ciB1vZht/XePds6tO+R10vGQg4werw8+FLoSGu76+Pl4Ln2xJMPvTKxf01PPPxyZP/Zc67799651vjTD78SHgslAGCaVtPjD71Ucqi1PeG23v7Wc7GnHn45MmF7G5946OXgobNt7re3rSP5xEMv+8dCHQBYptX49COvlrx/ttX19v6+tXVwz8OvloyFutH+1T/x0Cv+Q2fbXH/eDre1J/7xwZcC498/y7Sann70tdL3z5x13b/9584NP/XQy6GxUDdar+GJh18pOXTW/f4gotnLL1R8onw5dpQuyDrUjVelBnFnxQrcWrYIiph6VH/KYLc1Mh+3lS2COs15FtVaCH9ctQo12ocT7vY9+WYbAL/NQ8Fnnn2rzW29vU851gs889yvXdfb8+SbZ53qPZtDvb1PvHnGoZ7/med+0+m23tNPvN4OIGjXv717f93qtt4zT77R5lTvmWfc74+f7/3NaQA+u3rP/tO/tbutt+cp5/7tfebNc27r7X3qjVanes/sdb9/n376def3b89brvu356m3HPu3J4f98dSTb5wBYPdhDuzZ91aH6/49/cY5p3rPPP1r99v7xBstDvX8z+z79Xm39Z7e82arY709b7k//va8ddap3tN73nD9/hHR7BRWfLinao3rNUrtbAzV4Y7ypVCQOdxlTGsbQ3X4SElTpqe4ElZ8+EzlSpQqdt/P0xPrHXI8vdLbOeC6wVhPxnp2gSpzveig4+nW6PmY+/5Fhx2HT3s7+13/SdDXM+SYuPvOD9oFgowGeoccLx7o7YoFXNeLDjruj+h59/t3oMd5m6JdMdd/fcz09vZ3O/evv2fQdf9i3Rn2bw7bG+sZdDzd39fl/njp7x50fI/6ewYzX4hiI9Yz7Ny/7kHXn9++Luf+9fU473snAxneo/4e9/uDiGYfVSj4ZPmyGR3QWhGowq1lCzM+xzEANPkiuLk084u7jUSqSx/ePyTNo5BWMqAoC8rV4IZ5vrI6zWG4MKL48bHyJXiq7+iMzpoNlASS8QH7MxglpSHXp16CJYH4sGO9oPt64WBCH7A/YxPOqZ4/Hh+0P6MZLnNfL1waSMdS9mdwQ6UB16fWQpFAaihlfwa3JJd6JcH0UNr+/ctlf4RKQ+l0ctD+sUjQ9aniUCSYGko57d+A61PFGftXEnDfv9JASk/Zv02hUvf1gpFgSo/ab2+oNJjT8ZJK2L9NoUgu/Qskh/ocjueIP4f9EdQd+xcOuj51GiwN6Omkw/6IhFxvLxHNPjtKF2Ce3/kSekNaaNUHO2Jm+p2UZZ7VBEJh1b+mVg2tr9ZCjn9MbgjV4VR6AIeTvbaPO47Y3VS6wPFcbtRIpH8Tb7/v/r96JPi/v/X0lkfu3fvZR+579ot//629N3//64/Xvzp06opjqehp6ZDbFvrLsTZY47ixudi2c6PTuydvu31Lvdt6W2/b5DRuKnfefqXrzt90+ybH/t2yc3Ot23rbb9/kNCIhd952hfv+3brZ8QL/nbdvqXNbb+utmxzr3Xqb+3rbb9voeEH+TTdvcl3vpp2O+xe33O5+f2zdudHxAv+dO7e4vrj+pp2bHOvdclsOx8ttGx37sPP2La6Plx23b3Z+/3a6P/523LbZ8TW33ObclpOb/sD5eL555xbXkzFuuX1zNWD/l+gtH9vkev/uuO0Kx3q33rY5p8kYRDR71GlhXB6y/2qSEjiejh799fD59d//+uNNf/etPX/w8H37vvKTe/d94UffePLKe//qkeC/D7ff32c6/PUH4OayhfAL1fYx22C3LFDleA/W1nSs9y2zY8Hue5/7vlODz377l+/87TeeXPhOqnOv06jcNZE5U54nduNjV15ev/YjS5sBjP8zPX3djvWd16xd5nqW6Me2bKhdd82ylon1rr1xffu1a5e5nsV6y5Z1jZuuWX5sYr2rb1rTuXX9Stf9u/2qDZetu3rpwYn1rtuxvvvaNctdj/vevHlt5cbrVpwBMP5ASl+1fW3rRzesdD2r8/bN62s2XLf85MR612xf2379BvezgHduXt+48drlxybUM6+4fmX3to2rXJ8K27FxTeXmG1aenVBPv3Lr6tbtl692HSRu37S+ZsN1y1sm1rt229pz11++wvWsox0b11RsvmHVpP5t2brq7PZNa1z375bL11VdfsOKUxPrXb1tTdtHN6x0PYt1x8a1DZuuX3F8Yr2rtq3p3Ha5++P5xstXV2zZumri8advuX7VyRs3rXEdFG+5fO28TdetOARg/DCbfvW2Nee3Xb7S9fGybf2qyiu3rj47sd4VN6xsvWnTWtf7Y8flq6s3bV11akI948qPrm7bunF1TrO8iWj22BqZD2GTcSwp8W6i48H/+fUnVz51/7P7nV7/6H3PPbBfjy7q0If67B4PCw1XhBtsX2t7KnajQ8rsNRLJ99P9q395/y+zuvj4oW/uu9P3w11vbQjWXzfxsSo1iIWBcrRkOX3XjjFu+RQhgK/edfOS49dvMN7Z39ytKEJetX5Z9WV1NY3jX6M7DSMCMMaFUCGAr9y5Y/Hxazfo7x5o7hRCiKs2LK25rK5mzvjXZFrCxZjw2J/eedPy5us26O/sP9EphRBXrl9Ss6i+9qL+GRnWqrmofxD4yqduXnPihg3pd/a3dAgF6lXrlldfVl990c4zpJlVPQD40idvXHDimnXmOweaewBpXrluWc2ihtp5F70mUz3rg8eEAP7skzctar52nfHb/S3dAsK6cv3SmoX1NRddtGlazts7ft0eIYAv7bppefO1a423D5zsVlXFumLN4ppF9bUX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";

/***/ }),

/***/ "./src/media/basic_led1.png":
/*!**********************************!*\
  !*** ./src/media/basic_led1.png ***!
  \**********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAxCAYAAABK+/BHAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA3NJREFUaIHt2EtoHVUcBvDfpFesqY9UC2ptsT4otFgoigUVH+Br4cKNBhRr3FikutKFLnThQg1uxIqCdKG4URCL4KNWCrbV2gYFtb5QazFNi5FIRcRaqPXvYk6S2zS5dyZ3Lpfo/WAYzjnf//t/58ycc2YObUOsIg4S17QrQ0+7hLEKi3FpuxK003zb0TXfKXTNdwpd853CFPNxAXFuZ6zMhOgj3iUea0TKiN/Srri8gqTLic+Jy1vQOIMYIoJ4uRl5MBEPEBfPPumE3umtxcbu5Od9Yn6RoKdSwEi5DsR84jbiFWIf8VfSOUIME68RdxCnFtBaQGxP8R/m5eJGBus6cFETbg8xQOxPMePXGPFDehXr60eJ9cRJDYxvS9ydxTp7vEBGPJsE9hMXzsA7jXgr8f4hNqXRnzJScSaxltha14ltxFlTeL3EB6l9V64/K0RGbEhCwyd2IPqIL1L7HmJNQd2bkl4QeydXt1hA7Ej1n+STtSVERjyfBPdNTsCYR2xO9W+XH6E4u24yfkycTNydyp/lT6oSTDyBQ8TiVPdQSjREnDJL3UVpQIJ4Ik34AWJhRcanTdpH/EocJpa2qLUmzZU/JwemrYgH02gNVqT3atJ7shq9xsnG199lFeldnfS+qkZv5kS9xNF8UlWmOS+9hkGcVyay7FflEtTwZcm4BsiO4ZtUOL9MZFnz56T7LyXjmuHndC/1RVvW/PiyeLhkXDOM6/WWCfov/YzMLdSIS7CiAHd3OelYgavwPdmOEnHrcHsB4s4atsiP5ZphC54paOAebJSvTIiNZOuKxboONxTgLathAJcVIL9ncrWZAbES9+IBE8bJ6yLwKNlYY43sTuL+An7+KMA5ztzNaTN5fJq29WkDiwbXIeLaaWJfSu1ry7ipaMLG9XgOR/AwfpxCOIqtWIg3iSZPsBiqWm0eSVr9ZE/jVnyb2n7HANmNeAd98teqZdSaUwrhSoyQbc6L2ddYSSzBKNnfifcibsEVVSStYOSjJt8ZR05syw7UGVfHafUXD3N8k+qa7xSy5pRYivHzxtVodODZKjZge115iOxgC3pxV5ONp51XfyNnRZbK7/BCg/Ye3IdRbGqitQj9GMPrBXLvLcBpBVEzca7YlLs6cT+tIvOcnrBd851C13yn8L83fwy78FEB7k8YxhsV5PUvW8TDt68VResAAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/media/basic_led2.png":
/*!**********************************!*\
  !*** ./src/media/basic_led2.png ***!
  \**********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAxCAYAAABK+/BHAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA3pJREFUaIHt2EuIHFUUBuCvJi3GGWPGGPCN8UHAYCAoBlR8gK+FCzcaUIzjJiLRlS50oQsXanAjjihIFoobBTEIPmIkYBIdk0EhGl+oMTiZBEdGIiLGQIzHRd/GTjPTVTVdTTPaPxRF1f3Pf/57q+65t4ouIVgZHAyu6VaOgW4JYyXOwqXdStBN811H33yv0DffK/TN9wrHmQ/OD87slZmZEAwH7waPtSNlwa9pVVxeQdLlwWfB5R1oLA7GgwheziNvSMQDwUVzTdqkd0onscGu5Of9YGGRoKdSwGSZDgQLg9uCV4J9wZ9J50gwEbwW3BGcXEBrKNie4j8Mhor6aH4Ck8GFOdyBYCTYn2Iax3TwfXoVm+9PBeuDE9oY35a4Y0U62yqQBc8mgf3BBbPwFgVvJd7fwaY0+kMtvCXB2mBrUye2Bae18AaDD1L7zmBRKeMtHRhNQhOtHUhV4PPUvidYXVD3pqQXwd5GdUsjviPd/yRYPCfjLR14Pgnua0zAYEGwOd1/u+wIBac3TcaPgxODu9P17mBJR8ZbOjAaHIr6/lzwUEo0Hpw0R92laUAieCJN+JHg1EqMz5J0OPglOByc26HW6jRX/mgMTFcRPJhGa0NFeq8mvSer0MtL1qi/yyrSuzrpfVmFXrtEg8HRYHeFmgvSaxjB2WViy+4qz0ENX5SMmxUZx/B1ujyvTGxZ82ek888l4/LwUzqX2tGWNd8oi4dLxuWhoTdYJui/8zEy31ALLsHFBbi7yghHXfMqfJexo0Tcvbi9AHWshi2KrW5b8ExBA/dgo3plEmzM6qaK4DrcUIC3rIYRXFaA/J5/q82MCFZgHR6QjCesCwKPZky308i4M7i/gJ/fC3COM3dzWkwen6FtfVrAos1xKLh2htiXUvvaMn4qmbDB9XgOR/AwfmihHMVW9R3jm5HzBIuiqmrzSNJak/E0bsU3qe03jGTciHcwrP5adYxaPqUQrsRkxmbI+Aoror6dmMr4K/FexC24ooqkHY981AdgEJOtbRkHmoxr4nT2iZcwrxepvvleIcsjpO/Uxv/GVdr98Owco9jedD2ecXDOasFdOQtPN4817bwVKZXf4oU27QO4D1PYlKO1VN3QNF4vkHtvAc7cEfWdaQRjBbirEvfTKnLP6wnbN98r9M33Cv9788ewEx8V4P6ICbxRQV7/AEYQw7eX03zdAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/media/basic_led3.png":
/*!**********************************!*\
  !*** ./src/media/basic_led3.png ***!
  \**********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAxCAYAAABK+/BHAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA4dJREFUaIHtmF2IVVUYhp81nshmMkcTKjOyHwQlQYqEin6gv4suuqmBIptulLCu6qIu6qKLSrqJJgrCi6KbgkiCfswQUmvSocD+QzNpHKWJCSMiE8yeLuY7dDzMnLP2OftwmDovbDZ7rfd7v3etvde39t7QISirlSPKdZ3K0dcpYWA1sBS4vFMJOmm+4+iZ7xZ65ruFnvlu4RTzykXKed0yMxOUQeU95fFGpKT8GrviihKSrlA+V65sQ2OhMqaovNKMvCmIh5VLW01ao3dWO7HKnvDzgTI/J+jpCJgoMgBlvnKH8qpyUPkzdI4r48rryl3KmRlaA8rOiP9IGcj1UXsHJpRLmnD7lGHlUMRUjynl+3gUa9snlY3KaQ2M7wjuaM5g6wWS8lwIHFIunoW3QHk7eH8rW2L2B+p4i5V1yvaaQexQzq7j9SsfRv9uZUEh43UDGAmh8foBRBX4Ivq/VNZm6t4SeioHqtUtZnxXtH+qLGzJeN0AXgjBg9UFqMxTtkb7O0VnSDmnZjF+opyu3BvXe5XFbRmvG8CIclRZGm0PR6Ix5YwWdZfEhKg8GQt+WFlUivFZkg4qvyjHlAva1Foba+WP6sR0FMpDMVubStJ7LfSeKkOvWbJq/V1ekt61ofd1GXqNEvUrJ5S9JWrOi8dQ5fwisUXfKpcBFeCrgnGzIiVOAt/G5YVFYouaPzfOPxeMa4af4lzojbao+WpZPFYwrhmqev1Fgv47HyNzDRXlMmBlBndPEWFlJXANsD8ldhWI2wDcmUEdrQDbIGt32wY8m2ngPmAz05UJZXNKbMiJBW4AbsrgLa8Aw8AVGeT3+bfazAhlFbAeeJAwHlivCDyWElONNFLibuWBDD+/Z3BOMXdrbCZPzNC3MTYwGxxHletniH05+tcV8VPKglVuBJ4HjgOPAD/UUU4A24FFwFva+A7moqxq82hoDaXEM8DtwHfR9xswnBI3A+8Cg0w/Vm2j0pyShauBiZTYCpAS3wCrlGXAZEr8FbyXgNuAq8pI2vbMKxWmd8aJ+r6UOFxjnBpOe594gTm9SfXMdwupGSG+U6v/G9dAgx+e7WME2FlzPZYSR1pWU+5psvF08hhq5C2nVO4DXmzQ3wfcD0wCW5poLQGGgCngjYzcBzI4rUOpxCyNZnDXBPezMnLP6QXbM98t9Mx3C/978yeB3cDHGdwfgXHgzRLy8g/sSLjdatFCjAAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/media/basic_led4.png":
/*!**********************************!*\
  !*** ./src/media/basic_led4.png ***!
  \**********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAxCAYAAABK+/BHAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABDZJREFUaIHt2GuIFWUcx/HP7G6pa6mZUJp2oauWIV0MNXVNM8NQIlQKQom0MJPehOZld3QNrV6UFpH4KgIho1DKTJLI8JZtaUhKoqlpqZiWmantrqcXc1aP69kzZ/bSsrQ/OJyZef6X7zwz8zzP/ynUVJqrt8G2KFHhS/uaIkVBUwQFZ/VGN9zVVCmaDv4/UCt8c6kVvrnUCt9cKrrgrNwNCpw208Fm4rlYoU5YKrBRmfLMpsyeD1T7TqUKoVsaIW0Fvldgfb0jLNARq/GwlBtrN2fCp7BYNCt+IXRTvZNCaCcGKfVNPf07OG01+uJzPFvbJMjiNB/TcQBDhHblmawtHsEo3I+uaIszOIyNAiukfCz0V85Yr2nvpE8xCOu0N8KLTsbDRyALMA0HFCox2+4c0AUCT0opR4+Mlt/wB7qgU8b1w5irqyWeUVkH+EoMxgY8VNfNZocnEHoDU7EfJUI/XWT1isudslTU4yksx1Ltrbqgp0KdBUZKGY+h6atrXeoxMxzNsCvGSpRgk3aGm+ZEHYx1wtfcwEI8j59Fr9D5G4hGgbW4E9vwtNDmHPFq/IZjCa7FbpcYaKaD6R5fhYGo0NYw0x3PFSoXfM0NvIXJ2IM+Qn9aptB2n2AEVmrn8Vw9dJFedpVKK3AfNupsiGPG4V1sxVChY3Fh4iaplNAUvCl6by8DO7yQBt+sgzGJwGGmw6JXbQ/6OaYUywQmaOOBfMCJ7/mLFb0uu1CsyK1m2Z84xvlYfbEJp3Cz0K9J3OuzPHgKV2JRg8CR/kbeRzGmJHWvD/zo9P879fDNRvB2+mhUctckioay/tgqtDdpsqy6zQYcxe3muSaJa9Ke7y5azG1L6Fe3xqrGdlDluiSuSeGvTv8fTugXp2gVG+iaxCkZfKBd+ujvRH7xqolXnMSpRRcjLRq+SOgOgZ6xloU2qU4QuVxP1QZgp9BXefuFJmFMHpbri7BaSrdY0yqrBV7PE2CCakvUlJmhJWmofFSCYXnYXV+E8QJ3x5oGPpM6N9pkV6gXJopmy8z6eKIyKW3MMsORmBhPmO+5WJ4zThQJrcGaWGOYkwM+NBkL1S7qaxSY5B9jzPWoUmtz5nnJ7/ngNM4HO8dQ0crztKgCq115VYo66ApnLRfGPME81TjwKdNRIDBW6FUFRmNHuvW4wHihB0VVUif1WIRlU/ZHnFz9sV+ZVaDUD+gl1B2HlKkCgcVSRqJfYyRtOHyoSDQzbs3SduCC89S5JXTHBufVwiepVvjmUnwNO08PVe5NW/eRMrsJeRaRMQcU+dosv9RlHP/BVhmM9xBtKzWtpqZ/NbnHYVldxvHwBX509lydmd0i2gQ9hI9ionXBWBzBB7G55d4nTb71UVvRUFmJDUIDYmz7YAu+Fbqnoalb9AfbCt9caoVvLv3P4UPV2Ih1eVjvxT6BDxucF/8CPMYC8wvLlFQAAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/media/basic_matrix.png":
/*!************************************!*\
  !*** ./src/media/basic_matrix.png ***!
  \************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/basic_motor.png":
/*!***********************************!*\
  !*** ./src/media/basic_motor.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/basic_motor_c33eaec6.png";

/***/ }),

/***/ "./src/media/basic_pbuzzer.png":
/*!*************************************!*\
  !*** ./src/media/basic_pbuzzer.png ***!
  \*************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAloAAAPBCAYAAAAmjQTeAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAIABJREFUeJzs3Xm4pldZJvp7VUbIhEwBQmQmBExISBgzgAiOOKEitrZgQzscu52Hbocjtn052x5tW0XxHOw+itgqziDggMwkhBmBIJNKZApknvP0H++3UzuVGnZVfetb3/D7Xdd7VdWuXXvfF0rVzbPWu1YLACxAVf1YkueNzrECnt9a+9bRIZiPXaMDAACsK0ULAKATRQsAoBNFCwCgE0ULAKATRQsAoBNFCwCgE0ULAKATRQsAoBNFCwCgE0ULAKATRQsAoBNFCwCgE0ULAKATRQsAoBNFCwCgE0ULAKATRQsAoBNFCwCgE0ULAKATRQsAoBNFCwCgE0ULAKATRQsAoBNFCwCgE0ULAKATRQsAoBNFCwCgE0ULAKATRQsAoBNFCwCgE0ULAKATRQsAoBNFCwCgE0ULAKATRQsAoBNFCwCgE0ULAKATRQsAoBNFCwCgE0ULAKATRQsAoBNFCwCgE0ULAKATRQsAoBNFCwCgE0ULAKATRQsAoBNFCwCgE0ULAKATRQsAoBNFCwCgE0ULAKATRQsAoBNFCwCgE0ULAKATRQsAoBNFCwCgE0ULAKATRQsAoBNFCwCgE0ULAKATRQsAoBNFCwCgE0ULAKATRQsAoBNFCwCgE0ULAKATRQsAoBNFCwCgE0ULAKATRQsAoBNFCwCgkzY6AACboarulOS40TlWwHWttWtGhwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBXTRgeATVBVL05y4egcK+DbW2t/NDoEwLwcOToAbIi7JbnX6BAr4E6jAwDM067RAQAA1pWiBQDQiaIFANCJogUA0ImiBQDQiaIFANCJogUA0ImiBQDQiaIFANCJogUA0ImiBQDQiaIFANCJogUA0ImiBQDQiaIFANCJogUA0ImiBQDQiaIFANCJogUA0ImiBQDQiaIFANCJogUA0ImiBQDQiaIFANCJogUA0ImiBQDQiaIFANCJogUA0ImiBQDQiaIFANCJogUA0ImiBQDQiaIFANCJogUA0ImiBQDQiaIFANCJogUA0ImiBQDQiaIFANCJogUA0ImiBQDQiaIFANCJogUA0ImiBQDQiaIFANCJogUA0ImiBQDQiaIFANCJogUA0ImiBQDQiaIFANCJogUA0ImiBQDQiaIFANCJogUA0ImiBQDQiaIFANCJogUA0ImiBQDQiaIFANCJogUA0ImiBQDQiaIFANCJogUA0ImiBQDQiaIFANCJogUA0ImiBQDQiaIFANCJogUA0ImiBQDQiaIFANBJGx0ANkFVPSDJ8aNzrICPtNauGB0CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKCrNjoAwKJV1Y8k+crRORbgl1pr/3N0CNhkR44OADDA/ZM8anSIBbjX6ACw6XaNDgAAsK4ULQCAThQtAIBOFC0AgE4ULQCAThQtAIBOFC0AgE4ULQCAThQtAIBOFC0AgE4ULQCAThQtAIBOFC0AgE4ULQCAThQtAIBOFC0AgE4ULQCAThQtAIBOFC0AgE4ULQCAThQtAIBOFC0AgE4ULQCAThQtAIBOFC0AgE4ULQCAThQtAIBOFC0AgE4ULQCAThQtAIBOFC0AgE4ULQCAThQtAIBOFC0AgE4ULQCAThQtAIBOFC0AgE4ULQCAThQtAIBOFC0AgE4ULQCAThQtAIBOFC0AgE4ULQCAThQtAIBOFC0AgE4ULQCAThQtAIBOFC0AgE4ULQCAThQtAIBOFC0AgE4ULQCAThQtAIBOFC0AgE4ULQCAThQtAIBOFC0AgE4ULQCAThQtAIBOFC0AgE4ULQCATtroAACLVlWnJzlldI4FuLS19uHRIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANhAbXQAAIBlVVXHJLlPklOS3DfJvZN8VpI7JTkxyfFJjtrLH31Ha+0njlxUUACAZVRVd0/y4CQPmv249fMHJbnnIX7Zz0oSRQsA2AhV9VlJHpHk4dt+fODs6ULRAgDWSlUdlalEPTLJWbPnkUnuuugsihYAsLKq6sQkZ2b3lOqcJI/KtIdqOEULAFgJVXWfTEVqe6l6WJJdI3Ptj6IFACydqjolyaNnz2MylarPGhrqEChaAMBQVXVCpj1U58ye89Jxg/oiKVoAwMLMNqo/NFOZOj8rsPx3OBQtAKCLqjoiU4k6Z9tzbpJjRuZaJEULAJiLqrpHksclefzseXSS44aGGkzRAgAO2h7Tqq1lwNPjer/bUbQAgAOanVf1mOzeV3VeVvAtwEVTtACAO6iqB+b2persrOmG9Z4ULQDYcLNp1RMy7at63Ow5cWioNaFoAcCGqap7ZdqovrW36jFJjhoaak0pWgCw5rYtA24Vq4ePTbQ5FC0AWCNVdWSmU9a3itWTktxjZKZNpmgBwAqrquOTnJXd06oLY3/V0lC0AGCFVNW9k1yQqVSdn+TMJEcMDcU+KVoAsMRmxWqrVJ2X5FFxKOjKULQAYIlU1X0yFaqnxMb1ladoAcBAe7wR+PlJ7j80EHOlaAHAAs2K1da06klJTh0aiK4ULQDoZNvFy1tLgU9OcrehoVgoRQsA5qSqdmU6w+pzZ4+jFjacogUAh2HbUqCJFXegaAHAQdhjj9XnJrnv2EQsM0ULAPZjj+MWvjDJZ49NxCpRtABgm20HhD4lyVOTPGBsIlaZogXARquqe2XaW7W1gf1BYxOxThQtADZKVZ2Q5LHZvYHdlTZ0o2gBsNaq6rgkj8/uYnV2kl1DQ7ExFC0A1kpVHZnpLKutYnVhkqOHhmJjKVoArLTZxOoxSS7ItMfqcUmOHRoKZhQtAFZKVZ2cqVidl+ntwHOTHDM0FOyDogXAUpsdEHp+dher02PzOitC0QJgaVTVsZkmVOdte+46NBQcBkULgGG2nbp+fpJzZo/9VawNRQuAhaiqk5I8OrtL1eOS3H1oKOhM0QJg7qrq+EwHgZ6bqVw9Lsn9R2aCERQtAA5LVR2V5KHZvfR3XpKzkhwxMhcsA0ULgB2bTarOzHS6+tmZJlaPiH9PYK/8FwOAvZrtqTojuydV5yQ5LSZVsGOKFgBbb/+dk+ThmSZU58R5VXDYFC2ADbOtVG09j0lyz6GhYE0pWgBrai+b1M/JtEn9uJG5YJMoWgBrYB+lyuGfMJiiBbBilCpYHYoWwBKrqiMzvemnVMEKUrQAloRSBetH0QIYYLb8d0amAz/Pmf34OUmOHpkLmC9FC6CzqtqVaVL16Nlzbqa3/0yq4PYqyfuSXDT79TcMzDIXihbAnO3lnKrHJ7nb0FCwnC5L8uZtz+taa59Kkqr6qihaAJtt2zU15yU5P9PE6uShoWA5fSbJxUlem6lUvam19rGxkfpTtAB2aHah8lm5/bTKNTVwR1cmeUe2Tataa+8aG2kMRQtgL2ab1c/OdD3N1r6qhyXZNTIXLKGrk1ySaVp1UZKLW2vvHxtpeShaALndvqqtJcBHJbnT0FCwfG5Kcml2T6pek+StrbVbhqZaYooWsHGq6oQkj8zuYvXEuFQZ9nRLkvfm9pvVL26tXT801YpRtIC1tschoFvTKkuAcEdbbwC+JtOG9Utaa9eOjbT6FC1grVTV/ZI8LtPeqsfGEiDszYeye0/VRZk2q185NNGaUrSAlTVbAnx0pnOqtoqVoxXg9i7LVKq2b1b/xNhIm0PRAlbGbMP61vLfOZlKlitrYDfHKiwZRQtYSlV1XKbjFbb2Vj0pyT1GZoIlc3WSt+X2m9Xf3Vqroam4HUULWAqmVbBfjlVYUYoWsHB7mVY5XgF2c6zCGlG0gO5Mq2C/HKuwxhQtYK5mV9ecmalUnZfkwngTELZslaqt53WttU+NjURPihZwWPZydc25SY4ZGgqWw56l6k2ttY+NjcSiKVrAju0xrTon07TqfkNDwXJwrAJ7pWgB+zQ7Zf0JmU5af3ySs5IcNTQUjHd1kksyO/wzyUWttX8cG4kl1BJFC5ipqmMzTakel6lcPT7JvYeGgvGuz3RW1VapujjJexyrwA7sShQt2FhVdc9MV9Zs31917NBQMJZjFZinIxJFCzZGVT0wu98EPD/J6ZmNtmFDOVaBnky0YF3t5YiFz01y96GhYCzHKrBoJlqwLiwDwu3sWare2Fr7+NhIbCBFC1aVZUC4jWMVWFaKFqwCy4Bwm6szvQG4fVr17tZaDU0Fe6dowTKyDAhJkpuSXJrdheo1Sd7qWAVWiM3wsAwsA0JuTvK+OFaB9WKiBYtmGRCSTJvVt45UeHMcq8B6UrSgN8uA4FgFNpaiBfNWVQ9I8sQkT8p0jc1DhgaCxbos2+7/y7T898mxkWAYRQsOV1XdJ9Ok6ilJnprkAWMTwcI4VgH2z2Z4OFRV9WNJvinJ/UZngQW4Kskluf2k6h/HRoKlZ6IFh+FJUbJYT45VgPlQtAA23M1J3pndk6qLkryztXbT0FSwHhQtgA3jWAVWyaqfJ6hoAayxPY9VeG1r7fKxkeCgrHrRshkeYE3sWare2Fr7+NhIcNhWvWiZaAGsIMcqsCkULQC6ujrJ23L7adW7W2s1NBWwE4oWwBLZfqzC1ob1f2it3To0FYyz6hMte7QABrk5yfty+0nVRa21G4amguWy6kXLRAtgQRyrAAdP0QLgDhyrAPOx6kWrVVVTtAAOnWMVoJ9VL1pJcoSiBbAzV2S6rsaxCsBOKVoAe+FYBRhvHSZauxQtYNM5VgGW0zoULRMtYKPclGn57+IkF82ed7XWbhqaCtibdShaRypawDpzrAKsrqNHB5gDS4fA2nCsAqyXY0YHmANLh8BKcqwCrL91KFomWsDS2/NYhde01j4wNhKwAOtQtEy0gKXiWAVgi6IFcBgcqwDsj6IFsEM3J3lfbj+puqi1dsPQVMAyU7QA9uPqJP8lyauTvLW1dv3gPMBqWYfjHRQtYO7+OcmfJ/nZ1toHR4cBVpaJFrCRrkry7iRvT/LBJDcmuTzJx5Nc2lp738BswPpQtIC1d1Om/VSvz7RZ/S1JPugtQGAB1qFoOUcLuIMPJPnjTMt/b2itXTc4D7CZ7jI6wByYaAFJprcCfz/J85O82sQKWAJ3Gx1gDhQtIL+T5HmttfePDgKwzV1HB5gDRQs22EeSPLe19orRQQD2wkQLWFmvTvLVLmIGllFV3SnJCaNzzIHN8LCBXpnkaU5lB5bY/UYHmJMjdo1OACzUJUm+UskClpyiBayca5P8m9ba1aODABzA/UcHmJNdihZsjh9qrb13dAiAHXjI6ABzYqIFG+IjSX59dAiAHTp3dIA5UbRgQ/y0fVnAKqiqXUnOHp1jThQt2ADXJ/nd0SEAdui0JCeODjEnihZsgD9rrV0xOgTADn3p6ABzZDM8bIA/Hx0A4CB8xegAc2SiBRvgdaMDAOxEVX12kseOzjFHihasuY+5LBpYIT+QZJ26iaIFa+49owMA7ERVnZLkOaNzzJmiBWvug6MDABxIVbUkv5bk2NFZ5sxmeFhzHxodAGAHvi/r9bbhFhMtWHOfHB0AYH+q6juS/PToHJ2YaMGau3Z0AIC9qaoTqup/JPmlrNcG+O2OPHJ0AqArRQtYKlV1VJKvTfIzSe4zOE5vRyhasN6uHx0AYHZ/4SOTPDPJs5KcPDbRwuxStGC91egAwOapqvslOT3JGZkOIH1SkruNzDSIiRYAcHCq6uQkj0ny4CQnJbnv7Dk1yf2SHDcu3VIx0QIA9q+q7prkvCQXJnlqkjOTtKGhVoOiBQAkVXVSpinVozNNqe6S5N5JHpLktChWh0LRAoBNU1VHZipP52SaVJ2f5GFZ32MWRmmKFgCsuaq6T6ZStVWsnpDkzkNDbQYTLQBYJ1V1QqajFLZK1YXZnOMUlo2iBQCryhLg0lO0AGBVWAJcOYoWACwjS4BrwWZ4ABjNEuDaMtECgEWzBLgxFC0A6MkS4EZTtABgXiwBsgdFCwAOlSVADsBmeADYCUuAHAITLQDYkyVA5kTRAgBLgHSiaAGwWSwBskCKFgDryxIggylaAKwPS4AsGUULgNVkCZAVoGgBsPwsAbKiFC0Alo8lQNaEogXAWJYAWWNOhgdgcSwBsmFMtADoxxIgG07RAmA+quq4JI/JVKgek+SxSe45NBSMdYSiBcAhqap7Jzk3u5cAH53k6KGhYLnYowXAzlTV6Zk2ql+Y5IIkp45NBEvPRAuAvauqByZ5SqZp1ZOiWMHBMtECIKmqo5M8KtO+qq2J1T2GhoLVZ6IFsIm2vQ24tb/qUUnuNDQUrB8TLYB1V1V3S3Jmps3qj5s99x4aCjaD4x0A1kVV3SXJQzIdAPo5mU5bPyPJfUbmgg2maAGsmqq6c6Zzqh6f6ZT1h2YqWHcfmQu4A0ULYNlV1T0zbVLf2k91bpJjhoYCdsIeLYBlMztW4fzsLlanJ2lDQwGHwkQLYKTZJcuPzO5i9cS4tgbWhaIFsEhVdXySszKVqqfEJcuwzhQtgJ72ch/gY5IcNTQUsCiKFsA87WV/1cPHJgIGUrQADlVVHZXpINCtYvXkJHcbGgpYJooWwE5V1X0znV31+Eynq5+T5OihoYBlpmgB7M3sbcDTsnsJ8JxYBgQOjnO0AJLbNq0/LlOx2ppWHTs0FKy2y5K8K0kleergLKMcoWgBG2e2t+qsTIXq8ZmOWLjf0FCwui5P8o4k797+Y2vt8iSpqmdmc4uWpUNg/VXVgzIdq/DY2Y9nx7QKDtZNmUrUW5K8Lck7k7yrtXbZ0FTLTdEC1ktVnZjpTcDt51Y5aR0Ozo1J3p/kzduf1tp1Q1OtHnu0gNU1WwJ8aG6/Yd29gHBwrsg0ndoqVO/KtPR349BU68FEC1gNVXVMkjOSPGr2nJPpjkCnrMPOfTrJxdueS1prHxqaaL0pWsDyqaqjkzwkU5na/thXBTt3daa9VNuX//6htXbr0FSbRdECxqqqEzJNprYXqtOSHDEyF6yYm5Jcmt2F6jVJ3tpau2VoKhQtYDG27ad6RKYlwIdnKlgPjD1VcDBuzrSn6qLZc3GSd7bWbhqair1RtID5q6r7ZPdJ6o+Y/fjwJHcamQtW1GW5/aTqda21a8dGYoe8dQgcmqq6e5IHzJ4HZnrb73NmPypUcGiuyjShekOSNyV5o3OqVpqT4YG9m21Iv2+mErXn8+AkJ41LB2vhliTvze2nVW+xWX2tmGjBmnt6VZ2+j987Oslxmd7kOz7J3bc9Jye5y0ISwub45yRv3Pa8ubV2zdhIdGaiBWvuWaMDwIa6Ocn7Mk2pXpupVL1rbCQGMNECgDn410x7q7aWAF/ruhrirUMAOGhbe6tum1YleXdrrYamYhkpWgBwAFdkOq/qtXG8AgdH0QKAbba/Cbg1sTKt4lApWgBstCsznVe1tQT46tbaZ8ZGYo3YDA/AxrglybuTvC7J65O8obX23rGRWHOOdwBgbV2V5O3ZvQT42tba5WMjsWkULQDWxQeyewnQKessA0uHAKykazLtrXpNpqXAN9hbxRJStABYCR/LdMTC1jLgRa21G8ZGggNTtABYRlvLgI5YYJWZaAEw3M1J3pbdxepvW2ufHBsJ5kPRAmDRtp9d5V5A1pmJFgDdXZbdS4DeBmSTKFoAzNWeFy6/qrX24bGRYBxFC4DDcXWm/VVbxervW2tXjI0ES8NEC4CDclluf+HyG1trN42NBMtL0QJgX25N8p5sK1attXeNjQQrxUQLgNtcl+SN2X3a+ussA8JhUbQANtjVSd6Q3W8Dvtpp6zBfihbA5th+jc0r45gF6M1EC2CNbZ1f9cq4xgaGULQA1sf2+wFf3lr70Ng4sPFMtABW1PaDQV8Z9wPCMlK0AFbETUnent3LgK9urX1mbCTgQBQtgOW05xuBr2mtXT82EnCQTLQAlsT2NwKduA5rQtECGGPrjcCtidUl3giEtWOiBbAg3giEzaNoAXRwS5K3JXnV7HlNa+1TYyMBIyhaAIdvz6MW/rq1dvnYSMASMNECOAR7FqtXttY+PTYSsIQULYAduCXJW7N7j5ViBeyIogVwR3sWq1c4HBQ4BCZaAEluzrR5XbEC5krRAjbRVrHaus7m71trV4yNBKwhEy1gI9yQ5E1J/i7TcQuvb61dOzQRsAkULWAtbZ9YvTLJa1tr142NBGygUrSAdaBYAUtJ0QJW0c1J3pjkr5P8TZI3tNZuGBsJ4I4ULWBVfCC7J1beCgRWgaVDYGltFavXZjog9KOD8wAcLEULWBofS/L3mcrVy1trHxobB+DwKVrAKFdl2me1tRx4SWutxkYCmCsTLWBhrk3yuuwuVm9prd06NhJAX4oW0MueRy682puBwIYx0QLm5tYk78l0V+DWPivX2gCbTNECDss/Jfmr2fM3rbXLB+cBWCqKFnAwrsvsuIXYwA5wICZawAFtPyj0Za21qwbnAVgZihawp+szXW3zp0n+srX2z4PzAKwqEy0gSfKpTHcG/nmSP26tXTk4D8BaULRgs/1ekl9N8rrW2i2jwwCsGRMt2HAvbq29enQIgHW1a3QAAIA1VYoWAEAfihYAQC+KFgBAHyZaAAC9KFoAAH2YaAEA9KJoAQD0YaIFANCJogUA0IuiBQDQh4kWAEAvihYAQB8mWgAAvShaAAB93KJoAQD0cauiBQDQh6IFANCJogUA0ImiBQDQic3wAACdmGgBAHSiaAEAdKJoAQB0omgBAHSiaAEAdKJoAQB04ngHAIBOTLQAADpRtAAAOlG0AAA6UbQAADpRtAAAOvHWIQBAJyZaAACdKFoAAJ0oWgAAnShaAACdKFoAAJ0oWgAAnTjeAQCgExMtAIBOFC0AgE5K0QIA6OMmRQsAoI+bFS0AgD4ULQCAThQtAIBOFC0AgE4ULQCAThQtAIBOHO8AANCJiRYAQCeKFgBAJ4oWAEAntyhaAAB9mGgBAHSiaAEAdKJoAQB04hwtAIBOTLQAADpRtAAAOlG0AAA6UbQAADpRtAAAOlG0AAA6UbQAADpRtAAAOnFgKQBAJyZaAACdKFoAAJ0oWgAAndyoaAEA9HGDogUA0IeiBQDQiaIFANCJPVoAAJ2YaAEAdKJoAQB0YukQAKCDirsOAQC6uLG1VooWAMD83ZAkihYAwPwpWgAAndyYKFoAAD2YaAEAdHJDkhw5OgUAbIqqOjbJSUnukuT42Yd3zT625ZjM/pFOcu22n38m05EBn26tfbp/Wg7TjYmiBQCHpapOTnJqknvPnvts+/nJmUrVXTKVqWPm9D1vTvKpJJ/c9uNlST6U5ANJPpjkA621K+bx/TgkJloAsBNVddckZyZ5cJIHzX7c+vkJAyIdmanEnby/T6qqy5NcmuRtSd6+9ShgC2GiBQDbVdWRSU7PVKq2njOSnDIy12G4a5LHzp7bVNUHk1yU5HWz5y2ttZsXH2+tmWgBsNlmy36PTfL42XNukuOGhlqMB8yeZ8x+fW1VXZTk75P8TZLXt9Zu2NcfZkcULQA2S1XdJ8nnJXlykguTPHBsoqVx5yRPnD0/mql4vSZT6XplkktaazUw3yqydAjAequqkzIVq61y9bCxiVbGnZN8/uxJko9V1cuSvDTJK1prlw9LtjpMtABYP1V1vyRfkORLMxWFo8cmWgsnJ3nW7Lmlqt6aadL150le11q7dWS4JaVoAbAequqsJF+TqVydMTjOujsiyTmz5wczTbtemuTlmd5ofNfIcEtE0QJgdVXVw5N87ew5bXCcTXZykmfPnlTVO5L8fJIXtdZuGhdrOHu0AFgtVXVKkm9M8sxMRy+wfM5I8ttJ/mtVvTDJiWPjDGOiBcDyq6qjkjwtyXOSfGGmpSuW36mZ3mDcVNcnihYAS6qqHprk32eaYN1zcBw4WNcmihYAS6SqWqajGL45ydNjesXqUrQAWA5VdUKSr0vynUkePjgOzIOiBcBYsytwvivJ/5XN3TTNerouUbQAGGB2qOj3JHluplPIYd1ckyhaACxQVT0kyY9kWiY8anAc6MlEC4DFqKpTMxWsfxf/9rAZ7NECoK+qukeS7820yf3YwXFgkRQtAPqoqhOT/OdMBetOg+PACIoWAPNVVbuSfEOSn0lyr8FxYCRFC4D5qarPS/ILSR45OgssAUULgMM3O6rhl5J8+egssESuS5Jdo1MAsJqq6qiq+s4k74ySBXtyjhYAh6aqLkjyq0k+Z3QWWEI3ttZuTky0ADgIVXVSVf1GkldFyYJ9uW7rJyZaAOxIVX1Bkt9I8tmjs8CSu3brJyZaAOzXbIr1/CQvjZIFO3Fb0TLRAmCfquopSV6Y5JTBUWCV3LZ0aKIFwB3M3ih8XpK/ipIFB+uarZ+YaAFwO1V1epLfSXL26CywouzRAuCOqupbkrw5ShYcDm8dArBbVd0pya8k+Xejs8AasHQIwKSqHprkD5KcMToLrAlLhwAkVfW1SS6OkgXz5K1DgE1WVW32VuGLkpwwOA6smyu3fmLpEGDDVNUJSf5XXAQNvShaAJuoqh6U5E+SPGJ0FlhjtxUtS4cAG6KqLkzypihZ0JuiBbBJquqrMp3yftfRWWADKFoAm6KqvjPJ7yc5dnQW2BD2aAGsu6raleQXk3zH6CywYRQtgHVWVUck+a0kzxqdBTbQFVs/UbQA1kxVHZPkd5M8fXQW2FAmWgDrqKqOS/KSJE8dnQU2mKIFsG6q6i5JXpbksaOzwAa7ubXmrkOAdVJVJ0XaFw45AAAdV0lEQVTJgmVw5fZfKFoAK66qToySBctC0QJYF7M9WX+W5HGjswBJ9iha9mgBrKiqunOSlya5YHQW4DYmWgCrrqqOynTau5IFy+WK7b9QtABWTFW1JL+R5EtGZwHuwEQLYMX9QpJnjw4B7JWiBbCqquqHknz36BzAPl21/ReKFsCKqKqvSfITo3MA+2WiBbBqqurRSV4Yf2/DsrMZHmCVVNUDkvx5kjuPzgIckIkWwKqYnfr+F0nuOToLsCOf2f4LRQtgSc2OcfitJKePzgLs2Ce2/0LRAlheP5bkq0eHAA7KJ7f/QtECWEJV9eVJfnR0DuCgfWr7LxQtgCVTVQ9O8j/j72hYNbcm+fT2D/gvMcASqapjkrw4yYmjswAH7fLW2i3bP6BoASyXn0vyqNEhgEPyyT0/oGgBLImqelqS/zA6B3DIFC2AZVRVp2Tal9VGZwEO2eV7fkDRAhhsdl7Wbyb5rNFZgMPyiT0/oGgBjPftSb5odAjgsFk6BFgmVfWgJD81OgcwF5/a8wOKFsAgVbUr076s40dnAeZC0QJYIt+W5AmjQwBzc4c9WkeOSMHqqKrjkhyd5IRM//+y9eOW65NcN/v5p5NUa+12N5cDdzR7y/AnR+cA5uoOEy1Fa4NV1RFJ7p/ktCQPS3JqkpOTnJLknknum0NY0qiqmzNtCNx6PpHk40n+KckHZ8+HWmt3aP6wQX4lTn+HdXOHzfCK1oaoqrskeWySxyQ5I1O5Oi3JMR2+3ZFJ7jV79pfp6iTvT/LuJO/c9uMHW2u3dsgFS6GqvizJV4zOAcydidYmmJ3Jc0aS87O7XJ2W5TsI8fgkZ82e7a6pqrcmuXjb8z7li3VQVccm+W+jcwBzd0v2uFA6UbTWRlWdnOTCJE9J8sWZlv1W1XFJzps9W66uqrclefO2592ttRqQDw7H9yV50OgQwNx9am8DAUVrRc1eCz8vyVdmOujwYWMTdXd87li+PlNVlyTZ/lxq8sWyqqpTk/yn0TmALu6wbJgoWiulqo5K8rlJnp7ky3OAPVAb4C5Jnjx7tlw1W3bcKl5vTvKe1totA/LBnn4608QWWD97fcFL0Vpys/1WFyR5dqbNs+5C278TMv3ndcG2j101m3xdlORNSS5qrX1oQDY2WFWdleSZo3MA3Xx0bx9UtJZUVT0gyTfOngcOjrPqTkjyxNmTJKmqq5K8N8n7krxn28/f11q7dkRI1t5PxSHRsM4u29sHFa0lMnsb6RlJnpNpIrNsbwmukxOSnDt7tquq+kim0vXeTEdOXJLkra21GxYbkXVRVU9M8oWjcwBdmWgtq9kG2W9L8twk9xgcZ9O1JPebPU/d9vGbZm89XjR77jIgG6vLpdGw/ky0lk1VnZPkO5N8XfzfYtkdld0TsG8bnIUVUlVPTfL40TmA7v5lbx/0j/uCVdWRmZYHfzDJmYPjAP390OgAwEKYaI1UVUdneuPoh5M8dHAcYAGq6vFJnjQ6B7AQ9miNUFUnZVpq+q5MFzYDm+P/Hh0AWIirW2tX7e03FK1Oquq4JN+R5Pvj7CvYOFX18CRfMDoHsBB7nWYlitbczZYIn53keUnuPTQMMNJ3xBEtsCk+vK/fULTmZHb34FdlumLDAaOwwarqs5J8w+gcwMJ8ZF+/oWjNQVV9UZJfSHL66CzAUnhO3GkIm0TR6qGqHpqpYD1tdBZgqTxndABgoSwdztNsWeAHk3x3kqMHxwGWSFVdmORho3MAC2WiNQ+zfVjfkuQnktxtcBxgOX3T6ADAwilah6uqzkzy63GVBrAPVXV8kq8enQNYqFuT/NO+fnPXAoOspKo6rqp+Nsmbo2QB+/fMJMePDgEs1L+21m7c12+aaO1HVX1Jkl9Jcv/BUYDVYBM8bJ5/3N9vKlp7UVV3y1Swnjk6C7AaZifBP250DmDh3r+/31S09jA7E+s3k5wyOguwUp4xOgAwxH6Llj1aM1V1UlU9P8lfRskCDt6Xjw4ADGGidSBV9flJXpDk1NFZgNVTVZ+d5JGjcwBDXLq/39zoiVZVHVNVv5zkZVGygEP3ZXGBNGwqm+H3pqpOS/KiJGePzgKsPMuGsJk+1lq7cn+fsJETrap6VpKLo2QBh6mqTkpy4egcwBD73Z+VbNhEq6pOSPJrSb5+dBZgbXxR3HkKm+pdB/qEjSlaVfU5Sf4oyUNGZwHWyueNDgAMc8CitRFLh1X15UleGyULmL8LRgcAhnnngT5hrYtWVR1RVT+d5CVJThydB1gvVXX3JA8dnQMYZnOXDmd/Ab4oyVNGZwHW1gVxrANsqk+21j52oE9ay6JVVedkmmI5Gwvo6QmjAwDDHHCalazh0mFVfUWSV0XJAvo7b3QAYJgD7s9K1qxoVdX3JvnDJMeNzgKst6q6U5JzRucAhrl4J5+0FkuHVXVEkl9K8u2jswAb4xFxfhZssjft5JNWvmjNDiF9UZIvGZ0F2CgPGx0AGOaqJO/dySeudNGqqvtkuhD6jNFZgI1z2ugAwDCXtNZu2cknrmzRqqoHJHl5kgePzgJspNNHBwCG2dGyYbKim+Gr6lFJ3hAlCxjHRAs21442wicrWLSq6klJ/ibJPQdHATbU7AUcV3rB5nrNTj9xpYpWVT09056sk0ZnATbaA5IcMzoEMMR7Wmsf3eknr0zRqqqvSfLi+MsNGO++owMAw/zNwXzyShStqnpGkt/NCm/eB9bKPUYHAIb524P55KUvWlX1tUl+J0oWsDzsEYXNVJmu+duxpS5aVfVvo2QBy+fuowMAQ7yltfaJg/kDS1u0qupZSV6Y5IjBUQD2ZOkQNtNLDvYPLGXRqqqvSPKCLGk+YONZOoTN9AcH+weWrshU1ednervQciGwrO46OgCwcO9urb3nYP/QUhWtqnpckj9McvToLAD74e8o2DwHPc1KlqhoVdUZSf4iyfGjswAcQBsdAFioyvRy3kFbiqJVVQ9J8ooYxwOrQdGCzfKXrbX3HcofHF60qupumSZZJ4/OArBDw//uBBbqvx/qHxz6l0VVHZvkT+JyVmC1mGjB5nhvkpcf6h8eVrSqqiX5zSTnjcoAcIhMtGBzfH9rrQ71D4/8y+InknzDwO8PcKhuHh0AWIgXt9b+7HC+wJCiVVXflOSHR3xvgDm4fHQAoLsrknzP4X6RhRetqjovya8v+vsCzJGiBevv+1trHz3cL7LQolVV98p06rvD/oBVpmjBent1pqsAD9vCilZVHZXk95OcsqjvCdCJogXr68Yk33o4G+C3W+RE65eTXLDA7wfQi6IF6+snW2vvntcXW0jRmm1+/9ZFfC+ABVC0YD29J8lPz/MLdi9aVXV2kl/t/X0AFujDowMAc1dJvrm1dsM8v2jXolVVxyV5UZJje34fgAV77+gAwNz9Zmvt1fP+or0nWv89yWmdvwfAQrXWPpXkU6NzAHPz4STf1+MLdytaVfXVSb6p19cHGOx9owMAc7G1ZHhVjy/epWhV1alJnt/jawMsCcuHsB7+R2vtkC+NPpC5F62qOjLJ7yW567y/NsASMdGC1ffBJP+55zfoMdH6gSRP6PB1AZbJO0cHAA7LrUme1Vq7uuc3mWvRqqqHJfnReX5NgCX1+kx7O4DV9P/0eMtwT3MrWlW1K9O9QI5yANZea+2TsU8LVtV7k/zIIr7RPCda35PkvDl+PYBl99rRAYCDdmuS57bWrlvEN5tL0aqqByR53jy+FsAKUbRg9fxsa+01i/pmh120qqoleWGS4w47DcBqUbRgtbwrCx4MzWOi9fVJLpzD1wFYNZcm+djoEMCO3Jzk2fO+y/BADqtoVdUJSX5mTlkAVkprrZL8+egcwI78ZGvt4kV/08OdaP1okvvMIwjAinrJ6ADAAV2c5L+O+MaHXLSq6sFJvmOOWQBW0SuTXDk6BLBP1yT5+tbaTSO++eFMtH45yTHzCgKwimb7PV42OgewT/+htTbsyqxDKlpV9SVJvmjOWQBWleVDWE6/31p74cgAB120ZifA/2SHLACr6i+TLPRNJuCA/inJt44OcSgTrWcmOXPeQQBWVWvtyiR/NDoHcJtbkvzb1tqnRwc5qKJVVUcl+fFOWQBW2W+MDgDc5idaa68aHSI5+InWc5I8uEcQgFXWWvu7TKdOA2O9KoOOctibHRetqjo2yQ93zAKw6l4wOgBsuI8n+TettVtGB9lyMBOtb01y315BANbAbye5bnQI2FC3JvmG1tpHRwfZbkdFq6qOTPJdnbMArLTZxtsXj84BG+qnWmuvGB1iTzudaH1tkvv1DAKwJn4u0/+yBhbnb5M8b3SIvdlp0frerimAUZZmH8O6aK29O8kfjM4BG+QjSb62tXbz6CB7c8CiVVWfn+TsBWQBFk/R6uPHY6oFi3B9kq9qrX1idJB92clE6/u7pwBGUbQ6mE21/nB0DtgA39Zau3h0iP3Zb9GqqocnecqCsgCLp2j1819iqgU9/eLoewx34kATrecuJAUwiqLVSWvtnbFXC3r5iyQ/MDrETuyzaFXV0Um+YYFZgMVbys2ja+T7k1wzOgSsmTdliTe/72l/E62nJ7nHooIAQ5hoddRa+0iSnx2dA9bIpUm+tLW2Mv8DZn9F6zkLSwGMYg9Rfz+b5B9Hh4A18C9Jntpa+/joIAdjr0Wrqh6Q5MkLzgIs3kqM3ldZa+36JN89OgesuA8n+dzW2odHBzlY+5pofeN+fg9YH5YOF6C19meZNu8CB+89Sc5vrV06Osih2FeZevpCUwCjXD06wAb5j0muGh0CVsxbkzyxtfbPo4McqjsUrap6SJIzB2QBFk/RWpDW2geTfNfoHLBCLkrylFXbk7WnvU20TLNgcyhaC9Ra+3+TvGR0DlgBL8+0J+tTo4Mcrr0Vra9eeApghIoznkb45iSXjQ4BS+y3kjxtlY5w2J/bFa2qOjXJOYOyAIt1TWvN8Q4L1lr7ZJJnZyq6wG6V5Mdba89trd00Osy87DnR+rIkbUQQYOEsGw7SWnt5kl8dnQOWyDVJvrK19rzRQeZtz6Ll7CzYHN6AG+u7k7xqdAhYAh/N9Gbhn4wO0sNtRauqdiV54sAswGIpWgPNlkaemWRlX1uHOXh1kke31t48Okgv2ydaj0xyt1FBgIX76OgAm6619q+ZtmxcOzoLLFgl+eUkn9daW+u/i7YXLcuGsFn+aXQAktbaWzK9iQib4sokz2itfec6bXrfl+1F60mjQgBD/MvoAExaa7+T5OdH54AFuCTJ2a21PxgdZFF2JUlVtSQXDM4CLJa9QcvlB5O8aHQI6KSS/EqS81prHxgdZpGOnP34wCQnjQwCLJylwyXSWru1qp6V5IQkTxudB+boX5M8t7W2kRerby0dnjU0BTCCidaSme1XeUYc+8D6+N9JPmdTS1ayu2i5RBo2S0XRWkqttesyvYl4yegscBguT/LM1toz1uG+wsOxVbQeOTQFsGgfbK05UmBJtdauTPKFSf5hdBY4BC9JckZr7cWjgyyDraJ19tAUwKK9fXQA9q+19okk5yd57egssEP/kuRrWmtPX/ezsQ7Grqo6Mcmpo4MAC/WO0QE4sNba5Uk+P8mfjc4C+3Fzkl9IctomHduwU7uS3D8ukoZN84bRAdiZ2RLvV8Yl1CynS5I8vrX2fa21a0aHWUa7ktx3dAhgoSqK1kpprd3SWvv2JD+U5NbReSDTMuGzM91TePHgLEttVywbwqb5h9mSFCumtfZTSb44ySdGZ2FjXZPkeZmWCX+7tab4H8CuJJ89OgSwUC8bHYBD11r7qySPik3yLFZlOhPrEa21H7dMuHO7kpwyOgSwUC8dHYDD01r75ySfm+S/ZfoHEHp6WZJzZmdifXh0mFVjjxZsliuT/P3oEBy+1tpNrbXvTfKlcUE4fbw800b3L2qtvWV0mFW1K+44hE3yh621G0eHYH5mV5s8IslvxHSL+Xhtkie31r6gtebFmcO0K8mdR4cAFub3Rgdg/lprV7TWviXTmVsfGhyH1fXyJBe01s5vrf3t6DDrYleSO40OASzEvyT569Eh6Ke19sokZyT5+SQml+zEjUn+V5KzZhOs14wOtG5MtGBz/EZr7ZbRIeirtXZ1a+37kzwk0z+gsDdXJfnlJA9urX1ja+1towOtq1ZVVyQ5cXQQoKubktzf/WObp6qelOntRHfakiSXJvm1JC9orV01OswmMNGCzfBiJWsztdb+Lsm5SZ6V5L1j0zDIjUlenOTzMh00+otK1uK0qro5yRGjgwDdVJIzW2vvHB2EsapqV5IvyXSy96PGpmEB3p/kBUn+v9bax0eH2VStqq6JqRassz9trX356BAsj6pqSb4iyQ8nOWdwHObrM0n+MMn/n+RVrTVHfgzWqurTSe4yOgjQxS1Jzm6tvWN0EJZTVZ2T5JuTfGOSYwfH4dDckOQVma7I+YPW2rWD87BNq6rLktxrdBCgixe01v796BAsv6q6V5LnZipdpw6Ow4HdmORvk/x+kj9qrX1mcB72oVXVu5I8fHQQYO6uTvLQ1tplo4OwOqrqyCRfnOTrM13v46zF5XFFkr9M8idJXtpau3JwHnbgyCSfGh0C6OLnlCwOVmvt5iR/muRPq+qETHu5vi7JUzP9m8Fi/WOSv0ryx5n2XDmIdsW0qnpJpv8iAevjo5mmWdeMDsJ6qKp7JHl6kqcleXK8RNXL5Un+Jskrk7yitfaBwXk4TEdm+gsZWC8/rGQxT621TyR5fpLnV9WdkjwpU+n64iT3H5ds5X06yeszXeT8yiRvdoPDejkyyYdHhwDm6u+S/PboEKyv1tp1SV46e1JVD0tyYZLzk1wQxWtfKtOhsa9P8rrZ8w+OYFhvraqekenEWGD1XZ/pcNJLRwdhc1XVfTMVr/MyHYx6ZjZvqfGmJO9J8tYkb5v9+JbW2uVDU7FwrarOTXLR6CDAXPxwa+0nR4eA7arqiEyXXJ+V6c7FszK97X5KkjYw2jxcn+n+wK3nvUnenuSdrbUbRgZjObSqOi7JlZnuPQRW19uTnNtau2l0ENiJqjo2yYP3eB6YqYDdK8ldx6W7zbWZtthcluSftz1bxeqfWmu3jovHsmtJUlXvT/KgwVmAQ3dLkie01t40OgjMy6yInZypeN1z9pyU5IRtz4mZbjdpSY7Jvpcob810DlWSXJXk5kwnqn9623P5Hr/+FweBcri2zkR5RxQtWGW/omSxblpr12eaJnlpi5W1tVx48dAUwOH4SJIfHR0CgDvaKlqvH5oCOBz/sbV21egQANzR1h6t45J8Jq5XgFXzv1trzxgdAoC925UksxOk3zo4C3BwPpPkO0eHAGDfth/p8PJhKYBD8Z9cGg2w3LYXrb8algI4WH+X5DdHhwBg/247kbeqjkryiUxnlADL66pM1+x8aHQQAP5Pe3cfcmddx3H8/c10mQ9DaGspmPYgpgaFzUFPGLhp4pDFpq7ACLUQyZRiREESVCBCj1j9MRtmSW0T1BWGW0Gh68GnJN1gW5plMHXUmtNNmvv2x3WOnK1729m961y/c53r/YLDbu6xc324/7j34ff9nd/v4F5b0eqdJr2mYBZJw/m8JUuS2mH/a3fuKpJC0rDWAstLh5AkDWefyzwz81jgOaprDSSNl+3AORHxz9JBJEnD2WdFKyJ24aqWNK6us2RJUrvsPzoEWNF4CkmHcltE3Fk6hCTp8MRU38zMjcCZDWeRNLXNwLlesyNJ7TPVihbAbY2mkHQgrwCXWbIkqZ0OVLSWAzubDCJpSssiwuuxJKmlpixaEbEduL3hLJL2dTfwvdIhJEnTN+UeLYDMfCewETiquTiSejYC8xwZSlK7HWh0SERsBn7eYBZJlZ3AYkuWJLXfAVe0ADLzXcATHKSQSard5RGxsnQISdKRO2iBioiNgL/wpebcYsmSpMlx0BUtgMw8nWq/yIzRx5E67T5gYUS8WjqIJKkehxwJRsTTwA8ayCJ12QZgqSVLkibLIVe0ADLzTcAm4KTRxpE66XngvIh4pnQQSVK9htrkHhHbgC+NOIvURbuBRZYsSZpMQ61oAWTm64D1wLzRxZE6ZS/VJwxXlw4iSRqNoY9tiIi9wHXAntHFkTrlekuWJE22wzofKyIeAW4ZURapS74REbeWDiFJGq2hR4d9mTkDeBQ4q/44UifcDnwqIrJ0EEnSaB120QLIzLnAg8DR9caRJt5dwBUR4QhekjpgWlfrRMRDwFdqziJNuvuBT1iyJKk7prWiBa99CvFXwPz64kgT6zfAJRGxq3QQSVJzpl20ADJzDvAwcEo9caSJ9ABwUUS8VDqIJKlZ0xod9kXEVmAh8HI9caSJ8wBwsSVLkrrpiIoWQEQ8BlwJ+AkqaV+/Az4aES+WDiJJKuOIixZARNwFfK2O95ImxP1U48KdpYNIkso5oj1agzIzgNXAx+p6T6ml7qW6Wmd36SCSpLJqK1oAmXkc1Z6U99T5vlKLrAA+7REOkiSoaXTY19vweyGwsc73lVriu8BVlixJUl+tRQsgIp4HFgBP1f3e0phKYFlEfM5rdSRJg2odHQ7KzFOB3wKnjeoZ0hjYTbWKdWfpIJKk8TOyogWQme+gKlsnj/I5UiFbgUsj4k+lg0iSxtNIixZAZp5BVbbmjPpZUoP+AiyMiGdKB5Ekja/a92jtLyI2ARcAz476WVJD7gU+YMmSJB3KyIsWQEQ8CcwD/tzE86QRSeBmYJGnvUuShjHy0eGgzDyB6lDTBU0+V6rBDuCTEXF36SCSpPZotGgBZOYM4Hbg8qafLU3T48DiiNhSOogkqV0aGR0OiohXgKXAV5t+tjQNdwDvt2RJkqaj8RWtQZl5LfAtYEbJHNIU/gNcHRGrSweRJLVX0aIFkJlzgVXAW0tnkXr+CCyNiKdLB5EktVvjo8P9RcRDwLnAfaWzqPP2UH2q8EOWLElSHYqvaPVlZgDLgK8DRxWOo+7ZAFwZEY+UDiJJmhxjU7T6MvMC4KfA7NJZ1Al7gG8CN0XE7tJhJEmTZeyKFkBmzgZuBRaXzqKJ9jhwTW98LUlS7Yrv0ZpKRDwfEUuAy4AXSufRxNlFdbzIXEuWJGmUxnJFa5CrW6rZPcCNbnaXJDVh7ItWX2YuoSpcs0pnUSttAW6IiF+WDiJJ6o6xHB1OJSJWAWcDPwL2Fo6j9tgBfBE425IlSWpaa1a0BmXme4FvAx8unUVjaw9VKb8pIraWDiNJ6qZWFq2+zFwIfAc4vXQWjZV1VPuwnigdRJLUba0ZHU4lItYAZwI3UI2I1G0PAudHxHxLliRpHLR6RWtQZp4MfBm4Ci+p7pp1VCPC9aWDSJI0aGKKVl9mnkJ1lc81wLGF42h0EvgFcHNEPFg6jCRJU5m4otWXmbOA64AbgRMLx1F9/gv8jKpgPVk6jCRJBzOxRauvd+DpF4BrgeMLx9H0bQOWA9+PiH+UDiNJ0jAmvmj1ZeaJwBXAZ4FzCsfR8B4Dfgj8JCJeLh1GkqTD0ZmiNSgzPwhcDywCXl84jv7fi8DdwI8jYl3pMJIkTVcni1ZfZp4KfAa4GphdOE7X7QXWAyuAlRGxs3AeSZKOWKeLVl9mzgAuAT4OXAy8oWyizkjgD8BKYHVEPFs4jyRJtbJo7SczZwKXAkuAC4GjyyaaSBuAVcAdEfHX0mEkSRoVi9ZBZOYc4HJgKTCvcJw22wP8HlgDrIqIv5WNI0lSMyxaQ+rt57oIWAgsAI4pm2jsPUV1Yvs6YG1EbC+cR5Kkxlm0pqE3XrwImA98BHhb2URjYRvwa2AtVbH6e+E8kiQVZ9GqQWaeRlW4zqcaMZ7BZP9sX6I63+rh3ushYHNEZNFUkiSNmUkuA8Vk5knAeb3X+6gOSD2ddv68/w1sAh6lKlQPAxsi4tWiqSRJaoE2/sffSpl5PHAW8G7gTKpx49t7f55QMBrADmALsHngtQnYEhHbSgaTJKnNLFpjoHcB9qnAW4A3A6dQHaA6C5hJdSn2zN7rjb1/dgxwXO/rnVSXLe8GdlF9yu/F3t9tB/4FPAe80HttHfj6OTeqS5I0Gv8DaYRtH2HNAlQAAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/media/basic_pwm.png":
/*!*********************************!*\
  !*** ./src/media/basic_pwm.png ***!
  \*********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/basic_qingxie.png":
/*!*************************************!*\
  !*** ./src/media/basic_qingxie.png ***!
  \*************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAtCAYAAADRLVmZAAAACXBIWXMAAA7fAAAO3wFVDDfZAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABSZJREFUaIHV2WmsXVMUB3B99ZSaSlFFzUNLzNQ8NIo0ZiliFmKIOUQkQhSRGIJIRAgxE4JIYx6KGGqMoWKKqQitqaYa6rX9+bDXydnv9rrnvntuP1if7j37v/7rf/bZw9prL7LI/8gwFt/isW4RjsHNOAQ9XSFdMMb2+FWyad0gnIBZSvsMJ2DRLugtYuyI34J/JjauS7gr5gfhT5ibvcCnOBa9NWPsjN+DcwY2rCt6Av7MhD6FtXAj+rLnX+IMLNFBjD2zGF9i3bqi98PfWc8Wtk20r4lrM0zxic/F0DZjTMBf4Tsda9cVfUTWo89jWbwd/59owK4eL1AIgO8xCcu2iLFX5vM51qor+hTMC8JHis+P/TNhuzTxG4HLGobWj/ECwxqwE/FPYD7CqnVFn5sFvVfDpMNr0fZiC46V4gX+yLh+i2fL4+Dsa36AVeoIHoSrskA3YXAT3F4ZZvcKzhG4QrlaiK9RfM23sWId0YNDaGFXY1AL/CuBe6MVLsOvgEsbhtD7GF5HdG8MicImteGzR4bfu804x2c9PbNuTw/BQ0E2H2cPwPeF8HurqtdxknIDewnL1BG9JJ4Osrk4foD+O2a9PrEF7qwM9wKWjucnYv+Bil4OU4OsD0cNiKDkeTIbrwskXTgnE/0clornG2ex29slpZn+bjj+jQM6ER1cW2ZD4PCGtnxZfVyWCkjz6otou72dQEOlxZ60ro7rVHTGWcyRT0SmKG04hT2CxZv4HZcN09FVQYYrF/7z6ooOzo2Uq8VxuCQTfb//yBqlJfjjwN3dTqAHAvxeN4QH513ZVyzsXhW5Oo4O7DxVuTd2ych36pLw9bJeh3uqRIffYHwYPve1E+jNole6IHoQrstETzWAYx0OC7/52LQKfGyA+9TIytCDWxp6uifaRuFWnIaVKjimhf+DVQGH4LsAT+pQ9GDclom+XraD4uysrQ+PSTn+Uk24Ds56feuqwJcGeAYW60D0nZmwK5tghsfL/KS/zcbdUpbZG9hBeCfaJ1cFX0WZyB86ANG9eDATclkbLzked4To3GbF8/E4MHs+tkrEfQF8qU3Riyk3HLiw3RcO/yVwEB7W/6BNOiTPjN+PVhHtkDluWYEdgskZ/vyBiG7CNxJnSjl9M9u3iuD1AN7cAjNUKkuQJtCZdUQ34d8AF0llt8KurnI6OoB/anIiCdHPZKJP76boLM5Y5Rx4S9WCEUOgGFvnNLQtiWcz0ScvJNEbKlefZzGkXceLw2m6OCBLdZQiZ5+LYxaS6NWkiUlKt4dVe5XOIzEnnPfBMLyaiT5yIYleQSpPkCplK3dCck8QTMkmbJ+GA0K3LObOyxHne6zfKdG2+tscNU5HFbF6pVMRqRa+RR2yEcq6R5+qdbTzOD3KcsgcFUWlKrKVpQNvMaZP7aLWxljXRJx5OKgO0SjpvEiq9e3W0L4tRtRWnLguyIZi50urVB4u6t6zNRyesXf2SW/H5jVinZSJvqiO6DWlmjT8gu2aYDZTXiQV9pxU8B/IKWei8vrlhjqi18fXQfSzFmkklpGuSKY3vMBnUu2k5YaBccobi8k6vezCaHwTRLOwVZt+PdLm9LT+9qt0G7FGE59NomNItxoL1FfaFT1GmYF9p8PrOKmCdYfyIEJaJR7G+MCso8yBpmG5TkVvhh+CaAY26oioP+coXK7//Sepfv5F/P4cI+sE+SqIvsJ6dUU3cC+Oo5R7QWE/YIO65FOk4ku9m63WMXqkJXSKNPlbnqrasX8B4E7yMs0jQI4AAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/media/basic_rgb.png":
/*!*********************************!*\
  !*** ./src/media/basic_rgb.png ***!
  \*********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAuCAYAAAC8jpA0AAAACXBIWXMAAA7fAAAO3wFVDDfZAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABGVJREFUaIHtmE2IVlUcxn9HRzPHKNPSdGxRRGHgCIlCgaS2MFGR1CgsXbSpyBZB6SJw3EQWQRTRJjephC2sNlILpQ9MSPvQKHA001IxUhw/ZtT8+LW453Xu3Hnfe9933vfVCB+4HO7/POc5z+Ge8z/nHmgC1C9MsK4Z+k2B2hNN72uG/qBmiDYb101fLVw3fbXw/zCttqmT69Q9GcvuekTUyWpbEalNPapeUlfW0dm96mL1/jo0VkYfR3ONqwvti3XqsBo7G6tOU+erM9WJ6g01tB8W+01jYV6DoK5QL6cabFfHFnQ0Sl2l/mR5nFQ3qrMLdEarX6XaXVZfV4vXnvq42p1qfEidUoY3SH1F7cqY/Evdre5Xz2bqtqoTy2hNUg+keOfUpwvNZkSmqodTImfUOan6Eepnqfo96vPq+IxOi8k0WateiNxT6twUZ07UL+GwOrUmwymx8erOlNjmGB+ifhljF9SX1CFV6N2n7ojtLqqPxvjmVB87swMfiPHh6nqTKdIeY+/HDnrURwagV/pCXSaZpj3qr1eH12W4QqfTTBbIZfWJAWoMV39If72mQt0SO/s4l/gao1jDTTk67SZ5WHV6LR5q2sbVCcAMQODVsqQOhtHBJ/zDMc7SRQfvAiFLCyHsAjbG16VNMw3Mjwa+DyF0VuC8CCxI6b/A6ivvWXwUy7lWk4tTorWgPZZbcjj9zy2WifXqCIwB7qjWRK2mx8Xyj4qMwI4y0e1lqSH0AMcz2oWo1fTIWJ4AEEYIU+yNg7wHbAAuAecJdNDB5zmaJdO31uilOqjb4mp/UnhYOCYo9AhL+pDfpJUOhmYUZoC/gN3gJnC02hk1c88ljTLdGQ2XnjNCzsbgSPBE3yZuUPfVarpFfQd4MIfTDTwTQui9w+juHgzcleG1Am1ApawyGbglE5sBnC29qPcAH0StSvi2BVieQyhhFtBrurX1ErANSG8KvwO/5WjsJ5nng1OxX4G7U+8zM5rl8MAgYG8B6WIfw71YBmwFzgPfAQtIDlLLTY6fe+Ph543kABQOAiuicYCDJDk9nQz2xf7y0NkCTCI/3ZwOIfydDQY4QPIFAFDvBHYCfwJvA3uA24FFwG51aQjhLXADMAH4GcI58MpuGULYoo6Dyts/cKRgUH2RXoiZ+BB1l7q6Qrvp6nHL/DPG011NC7FRVwhLgK4QwqpylSGEr4E1QLlB1eyhUabnkaz6PKwFZquDM/F+h6kiNMr0BAoWdAjhONAD3Favh0aZbqF41QNcALK/ZdfMdD2o2UNLESGu6kkkc6/0wzkvprgSxgDL1FnZ9hmMAJ5TT6ZiN8ZycfwHPQ1sCiEcrWYA5Qy/7LXBIfXmSr6KPs2iAY22fowHHqpUWWS6cPo0ERX7LjK9tcFGqsVpkvNMWeQmdnUo8CxQdGX7GPAN0O+MksFTwKfAmRxOD/BhCOHHAq36YHLx0u+CsgzvsMk1RF34L+TpmnHd9NVCo0wfA05VwTtCstDqwr9DHSUm0Mq2zAAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/media/basic_temp.png":
/*!**********************************!*\
  !*** ./src/media/basic_temp.png ***!
  \**********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "blockly/core":
/*!**************************!*\
  !*** external "Blockly" ***!
  \**************************/
/***/ ((module) => {

module.exports = Blockly;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blockly/core */ "blockly/core");
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _language_zh_hans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language/zh-hans */ "./src/language/zh-hans.js");
/* harmony import */ var _language_zh_hant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language/zh-hant */ "./src/language/zh-hant.js");
/* harmony import */ var _language_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language/en */ "./src/language/en.js");
/* harmony import */ var _generators_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generators/generator */ "./src/generators/generator.js");
/* harmony import */ var _blocks_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/block */ "./src/blocks/block.js");







// 载入语言文件
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Lang.ZhHans, _language_zh_hans__WEBPACK_IMPORTED_MODULE_1__.ZhHansMsg);
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Lang.ZhHant, _language_zh_hant__WEBPACK_IMPORTED_MODULE_2__.ZhHantMsg);
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Lang.En, _language_en__WEBPACK_IMPORTED_MODULE_3__.EnMsg);
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Lang.ZhHans.MSG, _language_zh_hans__WEBPACK_IMPORTED_MODULE_1__.ZhHansCatgories);
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Lang.ZhHant.MSG, _language_zh_hant__WEBPACK_IMPORTED_MODULE_2__.ZhHantCatgories);
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Lang.En.MSG, _language_en__WEBPACK_IMPORTED_MODULE_3__.EnCatgories);

// 载入图形化模块外观定义文件
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Blocks, _blocks_block__WEBPACK_IMPORTED_MODULE_5__);

// 载入图形化模块代码生成定义文件
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Arduino.forBlock, _generators_generator__WEBPACK_IMPORTED_MODULE_4__);
})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map