import { assertToBe, assertThrow } from '../../../../dependencies/asserts/assert.js';
import { describe, test } from '../../../../dependencies/tests/test.js';
import { complexText } from './common.js';
import { includes } from './includes.js';
import { len } from "./len.js";

describe('includesTests', () => {
    test('найти текст с середины текста', () => {
        assertToBe(includes(complexText, 'terminator'), true);
    });
    test('найти текст с начала текста', () => {
        assertToBe(includes(complexText, 'Hello'), true);
    });
    test('найти текст с начала текста с одиночным символом', () => {
        assertToBe(includes(complexText, 'H'), true);
    });
    test('текст не найден', () => {
        assertToBe(includes(complexText, 'Help'), false);
    });
    test('регистр имеет значение', () => {
        assertToBe(includes(complexText, 'hello'), false);
    });
    test('слово есть, но длина больше', () => {
        assertToBe(includes(complexText, 'terminator.'), false);
    });
    test('поиск первого совпадения', () => {
        assertToBe(includes(complexText, 't'), true);
    });
    test('поиск первого совпадения с тем же индексом', () => {
        assertToBe(includes(complexText, 't', 16), true);
    });
    test('поиск второго совпадения', () => {
        assertToBe(includes(complexText, 't', 17), true);
    });
    test('поиск третьего совпадения', () => {
        assertToBe(includes(complexText, 't', 21), true);
    });
    test('после 27 символе нет символа t', () => {
        assertToBe(includes(complexText, 't', 28), false);
    });
    test('искомый текст встречается после начального индекса и находится нормально', () => {
        assertToBe(includes('I am: he hello brother. Answer: hello!', 'hello'), true);
    })
    test('второй параметр как пустая строка возвращает -1', () => {
        assertToBe(includes(complexText, ''), false);
        assertToBe(includes(complexText, '', 5), false);
    });
    test('пустой первый параметр дает возвращает -1', () => {
        assertToBe(includes('', 'q'), false);
    });
    test('отрицательный начальный индекс приводит к исключению', () => {
        assertThrow(() => includes(complexText, 't', -17), 'invalid index');
    });
    test('начальный индекс больше длины приводит к исключениею', () => {
        assertThrow(() => includes(complexText, 't', len(complexText) + 1), 'invalid index');
    });
    test('дробные числа в индексе приводит к исключению', () => {
        assertThrow(() => includes(complexText, 't', 2.2), 'invalid index');
    });
    test('индекс должен быть только с числовым типом', () => {
        assertThrow(() => includes(complexText, 't', true), 'invalid index');
        assertThrow(() => includes(complexText, 't', '2'), 'invalid index');
    });
    test('второй параметр обазятелен', () => {
        assertThrow(() => includes('trusted true'), 'invalid searchString string');
    });
    test('тип второго параметра должен быть string', () => {
        assertThrow(() => includes('trusted true', true), 'invalid searchString string');
        assertThrow(() => includes('only 33', 3), 'invalid searchString string');
    });
    test('если тип первого аргумента не строка, то будет исключение', () => {
        assertThrow(() => includes(), 'argument must be type of string');
        assertThrow(() => includes(true), 'argument must be type of string');
    });
});