
/* Hindi Text Input APIS -  http://www.hinkhoj.com
Copyright (c) Hinkhoj

Permission is hereby granted to any person obtaining a copy of this software and associated 
the rights to use of the Software for personal non-commercial use only and 
to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions 
of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED 
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
DEALINGS IN THE SOFTWARE.
 */

/* Indian Language Type Pad -  http://www.monusoft.com
Copyright (c) Monusoft

Permission is hereby granted to any person obtaining a copy of this software and associated 
the rights to use, copy, modify, merge copies of the Software for personal non-commercial use only and 
to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions 
of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED 
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
DEALINGS IN THE SOFTWARE.
 */



/* NOTE: Below code is taken originally from Monusoft and Modified by Hinkhoj.com */


var Vowel;
var VowelCombination;
var Consonant;
var ConsonantCombination;
var Symbol;
var VIRAM = 1;
var VRU = 2;
var RU = 3;
var ZWJ=4;
var ZWNJ=5;
var language = "Hindi";

var MAX_LANG = 4;
var LangVowel = new Array(MAX_LANG);
var LangVowelCombination = new Array(MAX_LANG);
var LangConsonant = new Array(MAX_LANG);
var LangConsonantCombination = new Array(MAX_LANG);
var LangSymbol = new Array(MAX_LANG);

// HINDI -------------------------------------

Vowel = new Array(123);
VowelCombination = new Array(6);
Consonant = new Array(123);
ConsonantCombination = new Array(27);
Symbol = new Array(60);

Symbol[32] = "\u0020"; // space
Symbol[58] = "\u0903"; // visarg
Symbol[48] = "\u0966"; //0
Symbol[49] = "\u0967"; //1
Symbol[50] = "\u0968"; //2
Symbol[51] = "\u0969"; //3
Symbol[52] = "\u096a"; //4
Symbol[53] = "\u096b"; //5
Symbol[54] = "\u096c"; //6
Symbol[55] = "\u096d"; //7
Symbol[56] = "\u096e"; //8
Symbol[57] = "\u096f"; //9

Vowel[97] = "\u0905"; //a
Vowel[65] = "\u0906"; //A
Vowel[105] = "\u0907"; //i
Vowel[73] = "\u0908"; //I
Vowel[117] = "\u0909"; //u 
Vowel[85] = "\u090a"; //U
Vowel[82] = "\u090b"; // R
Vowel[69] = "\u090d"; // E
Vowel[101] = "\u090f"; //e
Vowel[79] = "\u0911"; //O
Vowel[111] = "\u0913"; // o


VowelCombination[0] = new Array(3);
VowelCombination[0][0]= 97; //a
VowelCombination[0][1]= 97; //a
VowelCombination[0][2]= "\u0906"; //aa

VowelCombination[1] = new Array(3);
VowelCombination[1][0]= 101; //e
VowelCombination[1][1]= 101; //e
VowelCombination[1][2]= "\u0908"; //ee

VowelCombination[2] = new Array(3);
VowelCombination[2][0]= 111; //o
VowelCombination[2][1]= 111; //o
VowelCombination[2][2]= "\u090a"; //oo

VowelCombination[3] = new Array(3);
VowelCombination[3][0]= 82; //R
VowelCombination[3][1]= 85; //U
VowelCombination[3][2]= "\u090b"; 

VowelCombination[4] = new Array(3);
VowelCombination[4][0]= 97; //a
VowelCombination[4][1]= 105; //i
VowelCombination[4][2]= "\u0910"; //ai

VowelCombination[5] = new Array(3);
VowelCombination[5][0]= 97; //a
VowelCombination[5][1]= 117; //u 
VowelCombination[5][2]= "\u0914"; //au

Consonant[94] = "\u0901"; // chandrabindu
Consonant[77] = "\u0902"; // M
Consonant[107] = "\u0915"; //k
Consonant[103] = "\u0917"; //g
Consonant[106] = "\u091c"; //j
Consonant[122] = "\u091d"; //z
Consonant[84] = "\u091f"; //T
Consonant[68] = "\u0921"; //D
Consonant[78] = "\u0923"; //N
Consonant[116] = "\u0924"; //t
Consonant[100] = "\u0926"; //d
Consonant[110] = "\u0928"; //n
Consonant[112] = "\u092a"; //p
Consonant[102] = "\u092b"; //f
Consonant[98] = "\u092c"; //b
Consonant[109] = "\u092e"; //m
Consonant[121] = "\u092f"; //y
Consonant[114] = "\u0930"; //r
Consonant[108] = "\u0932"; //l
Consonant[76] = "\u0933"; //L
Consonant[118] = "\u0935"; //v
Consonant[119] = "\u0935"; //w
Consonant[115] = "\u0938"; //s
Consonant[120] = "\u0915\u094d\u0937"; //kSh
Consonant[104] = "\u0939"; //h
Consonant[97] = ""; // just empty string
Consonant[VIRAM] = "\u094d"; // half letter
Consonant[ZWJ] = "\u200D"; // ZWJ
Consonant[ZWNJ] = "\u200C"; // half letter
Consonant[65] = "\u093e"; //A
Consonant[105] = "\u093f"; //i
Consonant[73] = "\u0940"; //I
Consonant[117] = "\u0941"; //u
Consonant[85] = "\u0942"; //U
Consonant[VRU] = "\u0943"; // VRU
Consonant[69] = "\u0945"; //E
Consonant[101] = "\u0947"; //e
Consonant[79] = "\u0949"; //O
Consonant[111] = "\u094b"; //o
Consonant[75] = "\u0958"; //K
Consonant[71] = "\u095a"; //G
Consonant[90]= "\u095b"; //Z
Consonant[70]= "\u095e"; //F
Consonant[89]= "\u095f"; //Y


ConsonantCombination[0] = new Array(3);
ConsonantCombination[0][0]= 107; //k
ConsonantCombination[0][1]= 104; //h
ConsonantCombination[0][2]= "\u0916"; // kh

ConsonantCombination[1] = new Array(3);
ConsonantCombination[1][0]= 103; //g
ConsonantCombination[1][1]= 104; //h
ConsonantCombination[1][2]= "\u0918"; //gh

ConsonantCombination[2] = new Array(3);
ConsonantCombination[2][0]= 99; //c
ConsonantCombination[2][1]= 104; //h
ConsonantCombination[2][2]= "\u091a"; //ch

ConsonantCombination[3] = new Array(3);
ConsonantCombination[3][0]= 67; //C
ConsonantCombination[3][1]= 104; //h
ConsonantCombination[3][2]= "\u091b"; //Ch

ConsonantCombination[4] = new Array(3);
ConsonantCombination[4][0]= 84; //T
ConsonantCombination[4][1]= 104; //h
ConsonantCombination[4][2]= "\u0920"; //Th

ConsonantCombination[5] = new Array(3);
ConsonantCombination[5][0]= 68; //D
ConsonantCombination[5][1]= 104; //h
ConsonantCombination[5][2]= "\u0922"; //Dh

ConsonantCombination[6] = new Array(3);
ConsonantCombination[6][0]= 116; //t
ConsonantCombination[6][1]= 104; //h
ConsonantCombination[6][2]= "\u0925"; //th

ConsonantCombination[7] = new Array(3);
ConsonantCombination[7][0]= 100; //d
ConsonantCombination[7][1]= 104; //dh
ConsonantCombination[7][2]= "\u0927"; //dh

ConsonantCombination[8] = new Array(3);
ConsonantCombination[8][0]= 112; //p
ConsonantCombination[8][1]= 104; //ph
ConsonantCombination[8][2]= "\u092b"; //ph

ConsonantCombination[9] = new Array(3);
ConsonantCombination[9][0]= 98; //b
ConsonantCombination[9][1]= 104; //h
ConsonantCombination[9][2]= "\u092d"; //bh

ConsonantCombination[10] = new Array(3);
ConsonantCombination[10][0]= 115; //s
ConsonantCombination[10][1]= 104; //h
ConsonantCombination[10][2]= "\u0936"; //sh

ConsonantCombination[11] = new Array(3);
ConsonantCombination[11][0]= 83; //S
ConsonantCombination[11][1]= 104; //h
ConsonantCombination[11][2]= "\u0937"; //Sh

ConsonantCombination[12] = new Array(3);
ConsonantCombination[12][0]= 74; //J
ConsonantCombination[12][1]= 104; //h
ConsonantCombination[12][2]= "\u091c\u094d\u091e"; // Jh

ConsonantCombination[13] = new Array(3);
ConsonantCombination[13][0]= 97; //a
ConsonantCombination[13][1]= 97; //a
ConsonantCombination[13][2]= "\u093e"; //aa

ConsonantCombination[14] = new Array(3);
ConsonantCombination[14][0]= 101; //e
ConsonantCombination[14][1]= 101; //e
ConsonantCombination[14][2]= "\u0940"; //ee

ConsonantCombination[15] = new Array(3);
ConsonantCombination[15][0]= 111; //o
ConsonantCombination[15][1]= 111; //o
ConsonantCombination[15][2]= "\u0942"; //oo

ConsonantCombination[16] = new Array(3);
ConsonantCombination[16][0]= 97; //a
ConsonantCombination[16][1]= 105; //i
ConsonantCombination[16][2]= "\u0948"; //ai

ConsonantCombination[17] = new Array(3);
ConsonantCombination[17][0]= 97; //a
ConsonantCombination[17][1]= 117; //u
ConsonantCombination[17][2]= "\u094c"; //au

ConsonantCombination[18] = new Array(3);
ConsonantCombination[18][0] = 78; // N
ConsonantCombination[18][1] = 71; // G
ConsonantCombination[18][2] = "\u0919"; //NG

ConsonantCombination[19] = new Array(3);
ConsonantCombination[19][0] = 78; // N
ConsonantCombination[19][1] = 89; // Y
ConsonantCombination[19][2] = "\u091e"; //NY

ConsonantCombination[20] = new Array(3);
ConsonantCombination[20][0] = 75; // K
ConsonantCombination[20][1] = 104; // h
ConsonantCombination[20][2] = "\u0959"; //Kh

ConsonantCombination[21] = new Array(3);
ConsonantCombination[21][0] = 68; // D
ConsonantCombination[21][1] = 68; // D
ConsonantCombination[21][2] = "\u095c"; //DD

ConsonantCombination[22] = new Array(3);
ConsonantCombination[22][0] = 68; // D
ConsonantCombination[22][1] = 72; // H
ConsonantCombination[22][2] = "\u095d"; //DH

ConsonantCombination[23] = new Array(3);
ConsonantCombination[23][0] = 78; // N
ConsonantCombination[23][1] = 78; // N
ConsonantCombination[23][2] = "\u0929"; //NN

ConsonantCombination[24] = new Array(3);
ConsonantCombination[24][0] = 82; // R
ConsonantCombination[24][1] = 82; // R
ConsonantCombination[24][2] = "\u0931"; //RRa

ConsonantCombination[25] = new Array(3);
ConsonantCombination[25][0] = 76; // L
ConsonantCombination[25][1] = 76; // L
ConsonantCombination[25][2] = "\u0934"; //LL


ConsonantCombination[26] = new Array(3);
ConsonantCombination[26][0]= 106; //j
ConsonantCombination[26][1]= 104; //h
ConsonantCombination[26][2]= "\u091d"; // jh

LangVowel[0] = Vowel;
LangVowelCombination[0] = VowelCombination;
LangConsonant[0] = Consonant;
LangConsonantCombination[0] = ConsonantCombination;
LangSymbol[0] = Symbol;


// TAMIL -------------------------------------

Vowel = new Array(123);
VowelCombination = new Array(6);
Consonant = new Array(123);
ConsonantCombination = new Array(27);
Symbol = new Array(60);

Symbol[32] = "\u0020"; // space
Symbol[58] = "\u0b83"; // visarg
Symbol[48] = "\u0be6"; //0
Symbol[49] = "\u0be7"; //1
Symbol[50] = "\u0be8"; //2
Symbol[51] = "\u0be9"; //3
Symbol[52] = "\u0bea"; //4
Symbol[53] = "\u0beb"; //5
Symbol[54] = "\u0bec"; //6
Symbol[55] = "\u0bed"; //7
Symbol[56] = "\u0bee"; //8
Symbol[57] = "\u0bef"; //9

Vowel[97] = "\u0b85"; //a
Vowel[65] = "\u0b86"; //A
Vowel[105] = "\u0b87"; //i
Vowel[73] = "\u0b88"; //I
Vowel[117] = "\u0b89"; //u 
Vowel[85] = "\u0b8a"; //U
Vowel[82] = "\u0b8b"; // R
Vowel[69] = "\u0b8f"; // E
Vowel[101] = "\u0b8e"; //e
Vowel[79] = "\u0b93"; //O
Vowel[111] = "\u0b92"; // o


VowelCombination[0] = new Array(3);
VowelCombination[0][0]= 97; //a
VowelCombination[0][1]= 97; //a
VowelCombination[0][2]= "\u0b86"; //aa

VowelCombination[1] = new Array(3);
VowelCombination[1][0]= 101; //e
VowelCombination[1][1]= 101; //e
VowelCombination[1][2]= "\u0b88"; //ee

VowelCombination[2] = new Array(3);
VowelCombination[2][0]= 111; //o
VowelCombination[2][1]= 111; //o
VowelCombination[2][2]= "\u0b8a"; //oo

VowelCombination[3] = new Array(3);
VowelCombination[3][0]= 0;//82; //R
VowelCombination[3][1]= 0;//85; //U
VowelCombination[3][2]= "\u090b"; 

VowelCombination[4] = new Array(3);
VowelCombination[4][0]= 97; //a
VowelCombination[4][1]= 105; //i
VowelCombination[4][2]= "\u0b90"; //ai

VowelCombination[5] = new Array(3);
VowelCombination[5][0]= 97; //a
VowelCombination[5][1]= 117; //u 
VowelCombination[5][2]= "\u0b94"; //au

//Consonant[94] = "\u0901"; // chandrabindu
//Consonant[77] = "\u0902"; // M
Consonant[107] = "\u0b95"; //k
Consonant[103] = "\u0b95"; //g
Consonant[106] = "\u0b9c"; //j
Consonant[122] = "\u0b9c"; //z
Consonant[84] = "\u0b9f"; //T
Consonant[68] = "\u0b9f"; //D
Consonant[78] = "\u0ba3"; //N
Consonant[116] = "\u0ba4"; //t
Consonant[100] = "\u0ba4"; //d
Consonant[110] = "\u0ba8"; //n
Consonant[112] = "\u0baa"; //p
Consonant[102] = "\u0baa"; //f //TODO
Consonant[98] = "\u0baa"; //b
Consonant[109] = "\u0bae"; //m
Consonant[121] = "\u0baf"; //y
Consonant[114] = "\u0bb0"; //r
Consonant[108] = "\u0bb2"; //l
Consonant[76] = "\u0bb3"; //L
Consonant[118] = "\u0bb5"; //v
Consonant[119] = "\u0bb5"; //w
Consonant[115] = "\u0bb8"; //s
//Consonant[120] = "\u0915\u094d\u0937"; //kSh
Consonant[104] = "\u0bb9"; //h
Consonant[97] = ""; // just empty string
Consonant[VIRAM] = "\u0bcd"; // half letter
Consonant[ZWJ] = "\u200D"; // ZWJ
Consonant[ZWNJ] = "\u200C"; // half letter
Consonant[65] = "\u0bbe"; //A
Consonant[105] = "\u0bbf"; //i
Consonant[73] = "\u0bc0"; //I
Consonant[117] = "\u0bc1"; //u
Consonant[85] = "\u0bc2"; //U
Consonant[VRU] = "\u0943"; // VRU
Consonant[69] = "\u0bc7"; //E
Consonant[101] = "\u0bc6"; //e
Consonant[79] = "\u0bcb"; //O
Consonant[111] = "\u0bca"; //o
/*Consonant[75] = "\u0958"; //K
Consonant[71] = "\u095a"; //G
Consonant[90]= "\u095b"; //Z
Consonant[70]= "\u095e"; //F
Consonant[89]= "\u095f"; //Y*/


ConsonantCombination[0] = new Array(3);
ConsonantCombination[0][0]= 107; //k
ConsonantCombination[0][1]= 104; //h
ConsonantCombination[0][2]= "\u0b95"; // kh

ConsonantCombination[1] = new Array(3);
ConsonantCombination[1][0]= 103; //g
ConsonantCombination[1][1]= 104; //h
ConsonantCombination[1][2]= "\u0b95"; //gh

ConsonantCombination[2] = new Array(3);
ConsonantCombination[2][0]= 99; //c
ConsonantCombination[2][1]= 104; //h
ConsonantCombination[2][2]= "\u0b9a"; //ch

ConsonantCombination[3] = new Array(3);
ConsonantCombination[3][0]= 67; //C
ConsonantCombination[3][1]= 104; //h
ConsonantCombination[3][2]= "\u0b9a"; //Ch

ConsonantCombination[4] = new Array(3);
ConsonantCombination[4][0]= 84; //T
ConsonantCombination[4][1]= 104; //h
ConsonantCombination[4][2]= "\u0b9f"; //Th

ConsonantCombination[5] = new Array(3);
ConsonantCombination[5][0]= 68; //D
ConsonantCombination[5][1]= 104; //h
ConsonantCombination[5][2]= "\u0b9f"; //Dh

ConsonantCombination[6] = new Array(3);
ConsonantCombination[6][0]= 116; //t
ConsonantCombination[6][1]= 104; //h
ConsonantCombination[6][2]= "\u0ba4"; //th

ConsonantCombination[7] = new Array(3);
ConsonantCombination[7][0]= 100; //d
ConsonantCombination[7][1]= 104; //dh
ConsonantCombination[7][2]= "\u0ba4"; //dh

ConsonantCombination[8] = new Array(3);
ConsonantCombination[8][0]= 112; //p
ConsonantCombination[8][1]= 104; //ph
ConsonantCombination[8][2]= "\u0baa"; //ph

ConsonantCombination[9] = new Array(3);
ConsonantCombination[9][0]= 98; //b
ConsonantCombination[9][1]= 104; //h
ConsonantCombination[9][2]= "\u0baa"; //bh

ConsonantCombination[10] = new Array(3);
ConsonantCombination[10][0]= 115; //s
ConsonantCombination[10][1]= 104; //h
ConsonantCombination[10][2]= "\u0bb6"; //sh

ConsonantCombination[11] = new Array(3);
ConsonantCombination[11][0]= 83; //S
ConsonantCombination[11][1]= 104; //h
ConsonantCombination[11][2]= "\u0bb7"; //Sh

ConsonantCombination[12] = new Array(3);
ConsonantCombination[12][0]= 0; //J
ConsonantCombination[12][1]= 0; //h
ConsonantCombination[12][2]= "\u091c\u094d\u091e"; // Jh

ConsonantCombination[13] = new Array(3);
ConsonantCombination[13][0]= 97; //a
ConsonantCombination[13][1]= 97; //a
ConsonantCombination[13][2]= "\u0bbe"; //aa

ConsonantCombination[14] = new Array(3);
ConsonantCombination[14][0]= 101; //e
ConsonantCombination[14][1]= 101; //e
ConsonantCombination[14][2]= "\u0bc0"; //ee

ConsonantCombination[15] = new Array(3);
ConsonantCombination[15][0]= 111; //o
ConsonantCombination[15][1]= 111; //o
ConsonantCombination[15][2]= "\u0bc2"; //oo

ConsonantCombination[16] = new Array(3);
ConsonantCombination[16][0]= 97; //a
ConsonantCombination[16][1]= 105; //i
ConsonantCombination[16][2]= "\u0bc8"; //ai

ConsonantCombination[17] = new Array(3);
ConsonantCombination[17][0]= 97; //a
ConsonantCombination[17][1]= 117; //u
ConsonantCombination[17][2]= "\u0bcc"; //au

ConsonantCombination[18] = new Array(3);
ConsonantCombination[18][0] = 78; // N
ConsonantCombination[18][1] = 71; // G
ConsonantCombination[18][2] = "\u0b99"; //NG

ConsonantCombination[19] = new Array(3);
ConsonantCombination[19][0] = 78; // N
ConsonantCombination[19][1] = 89; // Y
ConsonantCombination[19][2] = "\u0b9e"; //NY

ConsonantCombination[20] = new Array(3);
ConsonantCombination[20][0] = 0; //75; // K
ConsonantCombination[20][1] = 0; //104; // h
ConsonantCombination[20][2] = "\u0959"; //Kh

ConsonantCombination[21] = new Array(3);
ConsonantCombination[21][0] = 0; //68; // D
ConsonantCombination[21][1] = 0; //68; // D
ConsonantCombination[21][2] = "\u095c"; //DD

ConsonantCombination[22] = new Array(3);
ConsonantCombination[22][0] = 0; //68; // D
ConsonantCombination[22][1] = 0; //72; // H
ConsonantCombination[22][2] = "\u095d"; //DH

ConsonantCombination[23] = new Array(3);
ConsonantCombination[23][0] = 78; // N
ConsonantCombination[23][1] = 78; // N
ConsonantCombination[23][2] = "\u0ba9"; //NN

ConsonantCombination[24] = new Array(3);
ConsonantCombination[24][0] = 82; // R
ConsonantCombination[24][1] = 82; // R
ConsonantCombination[24][2] = "\u0bb1"; //RRa

ConsonantCombination[25] = new Array(3);
ConsonantCombination[25][0] = 76; // L
ConsonantCombination[25][1] = 76; // L
ConsonantCombination[25][2] = "\u0bb4"; //LL

ConsonantCombination[26] = new Array(3);
ConsonantCombination[26][0]= 106; //j
ConsonantCombination[26][1]= 104; //h
ConsonantCombination[26][2]= "\u0b9c"; // jh

LangVowel[1] = Vowel;
LangVowelCombination[1] = VowelCombination;
LangConsonant[1] = Consonant;
LangConsonantCombination[1] = ConsonantCombination;
LangSymbol[1] = Symbol;

// BENGALI -----------------------------------

Vowel = new Array(123);
VowelCombination = new Array(6);
Consonant = new Array(123);
ConsonantCombination = new Array(21);
Symbol = new Array(60);

Symbol[32] = "\u0020"; // space
Symbol[58] = "\u0983"; // visarg
Symbol[48] = "\u09e6"; //0
Symbol[49] = "\u09e7"; //1
Symbol[50] = "\u09e8"; //2
Symbol[51] = "\u09e9"; //3
Symbol[52] = "\u09ea"; //4
Symbol[53] = "\u09eb"; //5
Symbol[54] = "\u09ec"; //6
Symbol[55] = "\u09ed"; //7
Symbol[56] = "\u09ee"; //8
Symbol[57] = "\u09ef"; //9

Vowel[97] = "\u0985"; //a
Vowel[65] = "\u0986"; //A
Vowel[105] = "\u0987"; //i
Vowel[73] = "\u0988"; //I
Vowel[117] = "\u0989"; //u 
Vowel[85] = "\u098a"; //U
Vowel[82] = "\u098b"; // R
Vowel[69] = "\u098f"; // E //XXX 098d
Vowel[101] = "\u098f"; //e
Vowel[79] = "\u0993"; //O //XXX 0991
Vowel[111] = "\u0993"; // o


VowelCombination[0] = new Array(3);
VowelCombination[0][0]= 97; //a
VowelCombination[0][1]= 97; //a
VowelCombination[0][2]= "\u0986"; //aa

VowelCombination[1] = new Array(3);
VowelCombination[1][0]= 101; //e
VowelCombination[1][1]= 101; //e
VowelCombination[1][2]= "\u0988"; //ee

VowelCombination[2] = new Array(3);
VowelCombination[2][0]= 111; //o
VowelCombination[2][1]= 111; //o
VowelCombination[2][2]= "\u098a"; //oo

VowelCombination[3] = new Array(3);
VowelCombination[3][0]= 82; //R
VowelCombination[3][1]= 85; //U
VowelCombination[3][2]= "\u098b"; 

VowelCombination[4] = new Array(3);
VowelCombination[4][0]= 97; //a
VowelCombination[4][1]= 105; //i
VowelCombination[4][2]= "\u0990"; //ai

VowelCombination[5] = new Array(3);
VowelCombination[5][0]= 97; //a
VowelCombination[5][1]= 117; //u 
VowelCombination[5][2]= "\u0994"; //au

Consonant[94] = "\u0981"; // chandrabindu
Consonant[77] = "\u0982"; // M
Consonant[107] = "\u0995"; //k
Consonant[103] = "\u0997"; //g
Consonant[106] = "\u099c"; //j
Consonant[122] = "\u099d"; //z
Consonant[84] = "\u099f"; //T
Consonant[68] = "\u09a1"; //D
Consonant[78] = "\u09a3"; //N
Consonant[116] = "\u09a4"; //t
Consonant[100] = "\u09a6"; //d
Consonant[110] = "\u09a8"; //n
Consonant[112] = "\u09aa"; //p
Consonant[102] = "\u09ab"; //f
Consonant[98] = "\u09ac"; //b //XXX no 'ba' in bengali
Consonant[109] = "\u09ae"; //m
Consonant[121] = "\u09af"; //y
Consonant[114] = "\u09b0"; //r
Consonant[108] = "\u09b2"; //l
Consonant[76] = "\u09b2"; //L // XXX no 'LA' in bengali
Consonant[118] = "\u09ac"; //v //XXX 'ba' is 'va'
Consonant[119] = "\u09ac"; //w //XXX 'ba' is 'wa'
Consonant[115] = "\u09b8"; //s
Consonant[120] = "\u0995\u09cd\u09b7"; //kSh
Consonant[104] = "\u09b9"; //h
Consonant[97] = ""; // just empty string
Consonant[VIRAM] = "\u09cd"; // half letter
Consonant[ZWJ] = "\u200D"; // ZWJ
Consonant[ZWNJ] = "\u200C"; // half letter
Consonant[65] = "\u09be"; //A
Consonant[105] = "\u09bf"; //i
Consonant[73] = "\u09c0"; //I
Consonant[117] = "\u09c1"; //u
Consonant[85] = "\u09c2"; //U
Consonant[VRU] = "\u09c3"; // VRU
Consonant[69] = "\u09c7"; //E // XXX no E
Consonant[101] = "\u09c7"; //e
Consonant[79] = "\u09cb"; //O // XXX no O
Consonant[111] = "\u09cb"; //o
/*Consonant[75] = "\u0958"; //K
Consonant[71] = "\u095a"; //G
Consonant[90]= "\u095b"; //Z
Consonant[70]= "\u095e"; //F
Consonant[89]= "\u095f"; //Y*/ // XXX not there in bengali


ConsonantCombination[0] = new Array(3);
ConsonantCombination[0][0]= 107; //k
ConsonantCombination[0][1]= 104; //h
ConsonantCombination[0][2]= "\u0996"; // kh

ConsonantCombination[1] = new Array(3);
ConsonantCombination[1][0]= 103; //g
ConsonantCombination[1][1]= 104; //h
ConsonantCombination[1][2]= "\u0998"; //gh

ConsonantCombination[2] = new Array(3);
ConsonantCombination[2][0]= 99; //c
ConsonantCombination[2][1]= 104; //h
ConsonantCombination[2][2]= "\u099a"; //ch

ConsonantCombination[3] = new Array(3);
ConsonantCombination[3][0]= 67; //C
ConsonantCombination[3][1]= 104; //h
ConsonantCombination[3][2]= "\u099b"; //Ch

ConsonantCombination[4] = new Array(3);
ConsonantCombination[4][0]= 84; //T
ConsonantCombination[4][1]= 104; //h
ConsonantCombination[4][2]= "\u09a0"; //Th

ConsonantCombination[5] = new Array(3);
ConsonantCombination[5][0]= 68; //D
ConsonantCombination[5][1]= 104; //h
ConsonantCombination[5][2]= "\u09a2"; //Dh

ConsonantCombination[6] = new Array(3);
ConsonantCombination[6][0]= 116; //t
ConsonantCombination[6][1]= 104; //h
ConsonantCombination[6][2]= "\u09a5"; //th

ConsonantCombination[7] = new Array(3);
ConsonantCombination[7][0]= 100; //d
ConsonantCombination[7][1]= 104; //dh
ConsonantCombination[7][2]= "\u09a7"; //dh

ConsonantCombination[8] = new Array(3);
ConsonantCombination[8][0]= 112; //p
ConsonantCombination[8][1]= 104; //ph
ConsonantCombination[8][2]= "\u09ab"; //ph

ConsonantCombination[9] = new Array(3);
ConsonantCombination[9][0]= 98; //b
ConsonantCombination[9][1]= 104; //h
ConsonantCombination[9][2]= "\u09ad"; //bh

ConsonantCombination[10] = new Array(3);
ConsonantCombination[10][0]= 115; //s
ConsonantCombination[10][1]= 104; //h
ConsonantCombination[10][2]= "\u09b6"; //sh

ConsonantCombination[11] = new Array(3);
ConsonantCombination[11][0]= 83; //S
ConsonantCombination[11][1]= 104; //h
ConsonantCombination[11][2]= "\u09b7"; //Sh

ConsonantCombination[12] = new Array(3);
ConsonantCombination[12][0]= 74; //J
ConsonantCombination[12][1]= 104; //h
ConsonantCombination[12][2]= "\u099c\u09cd\u099e"; // Jh

ConsonantCombination[13] = new Array(3);
ConsonantCombination[13][0]= 97; //a
ConsonantCombination[13][1]= 97; //a
ConsonantCombination[13][2]= "\u09be"; //aa

ConsonantCombination[14] = new Array(3);
ConsonantCombination[14][0]= 101; //e
ConsonantCombination[14][1]= 101; //e
ConsonantCombination[14][2]= "\u09c0"; //ee

ConsonantCombination[15] = new Array(3);
ConsonantCombination[15][0]= 111; //o
ConsonantCombination[15][1]= 111; //o
ConsonantCombination[15][2]= "\u09c2"; //oo

ConsonantCombination[16] = new Array(3);
ConsonantCombination[16][0]= 97; //a
ConsonantCombination[16][1]= 105; //i
ConsonantCombination[16][2]= "\u09c8"; //ai

ConsonantCombination[17] = new Array(3);
ConsonantCombination[17][0]= 97; //a
ConsonantCombination[17][1]= 117; //u
ConsonantCombination[17][2]= "\u09cc"; //au

ConsonantCombination[18] = new Array(3);
ConsonantCombination[18][0] = 78; // N
ConsonantCombination[18][1] = 71; // G
ConsonantCombination[18][2] = "\u0999"; //NG

ConsonantCombination[19] = new Array(3);
ConsonantCombination[19][0] = 78; // N
ConsonantCombination[19][1] = 89; // Y
ConsonantCombination[19][2] = "\u099e"; //NY

/*
ConsonantCombination[20] = new Array(3);
ConsonantCombination[20][0] = 75; // K
ConsonantCombination[20][1] = 104; // h
ConsonantCombination[20][2] = "\u0959"; //Kh

ConsonantCombination[21] = new Array(3);
ConsonantCombination[21][0] = 68; // D
ConsonantCombination[21][1] = 68; // D
ConsonantCombination[21][2] = "\u095c"; //DD

ConsonantCombination[22] = new Array(3);
ConsonantCombination[22][0] = 68; // D
ConsonantCombination[22][1] = 72; // H
ConsonantCombination[22][2] = "\u095d"; //DH

ConsonantCombination[23] = new Array(3);
ConsonantCombination[23][0] = 78; // N
ConsonantCombination[23][1] = 78; // N
ConsonantCombination[23][2] = "\u0929"; //NN

ConsonantCombination[24] = new Array(3);
ConsonantCombination[24][0] = 82; // R
ConsonantCombination[24][1] = 82; // R
ConsonantCombination[24][2] = "\u0931"; //RRa

ConsonantCombination[25] = new Array(3);
ConsonantCombination[25][0] = 76; // L
ConsonantCombination[25][1] = 76; // L
ConsonantCombination[25][2] = "\u0934"; //LL
*/ // XXX not there in bengali

ConsonantCombination[20] = new Array(3);
ConsonantCombination[20][0]= 106; //j
ConsonantCombination[20][1]= 104; //h
ConsonantCombination[20][2]= "\u099d"; // jh

LangVowel[2] = Vowel;
LangVowelCombination[2] = VowelCombination;
LangConsonant[2] = Consonant;
LangConsonantCombination[2] = ConsonantCombination;
LangSymbol[2] = Symbol;

// KANNADA -------------------------------------

Vowel = new Array(123);
VowelCombination = new Array(6);
Consonant = new Array(123);
ConsonantCombination = new Array(21);
Symbol = new Array(60);

Symbol[32] = "\u0020"; // space
Symbol[58] = "\u0c83"; // visarg
Symbol[48] = "\u0ce6"; //0
Symbol[49] = "\u0ce7"; //1
Symbol[50] = "\u0ce8"; //2
Symbol[51] = "\u0ce9"; //3
Symbol[52] = "\u0cea"; //4
Symbol[53] = "\u0ceb"; //5
Symbol[54] = "\u0cec"; //6
Symbol[55] = "\u0ced"; //7

Symbol[56] = "\u0cee"; //8
Symbol[57] = "\u0cef"; //9

Vowel[97] = "\u0c85"; //a
Vowel[65] = "\u0c86"; //A
Vowel[105] = "\u0c87"; //i
Vowel[73] = "\u0c88"; //I
Vowel[117] = "\u0c89"; //u 
Vowel[85] = "\u0c8a"; //U
Vowel[82] = "\u0c8b"; // R
Vowel[69] = "\u0c8f"; // E
Vowel[101] = "\u0c8e"; //e
Vowel[79] = "\u0c93"; //O
Vowel[111] = "\u0c92"; // o


VowelCombination[0] = new Array(3);
VowelCombination[0][0]= 97; //a
VowelCombination[0][1]= 97; //a
VowelCombination[0][2]= "\u0c86"; //aa

VowelCombination[1] = new Array(3);
VowelCombination[1][0]= 101; //e
VowelCombination[1][1]= 101; //e
VowelCombination[1][2]= "\u0c88"; //ee

VowelCombination[2] = new Array(3);
VowelCombination[2][0]= 111; //o
VowelCombination[2][1]= 111; //o
VowelCombination[2][2]= "\u0c8a"; //oo

VowelCombination[3] = new Array(3);
VowelCombination[3][0]= 82; //R
VowelCombination[3][1]= 85; //U
VowelCombination[3][2]= "\u0c8b"; 

VowelCombination[4] = new Array(3);
VowelCombination[4][0]= 97; //a
VowelCombination[4][1]= 105; //i
VowelCombination[4][2]= "\u0c90"; //ai

VowelCombination[5] = new Array(3);
VowelCombination[5][0]= 97; //a
VowelCombination[5][1]= 117; //u 
VowelCombination[5][2]= "\u0c94"; //au

Consonant[94] = "\u0901"; // chandrabindu
Consonant[77] = "\u0c82"; // M
Consonant[107] = "\u0c95"; //k
Consonant[103] = "\u0c97"; //g
Consonant[106] = "\u0c9c"; //j
Consonant[122] = "\u0c9d"; //z
Consonant[84] = "\u0c9f"; //T
Consonant[68] = "\u0ca1"; //D
Consonant[78] = "\u0ca3"; //N
Consonant[116] = "\u0ca4"; //t
Consonant[100] = "\u0ca6"; //d
Consonant[110] = "\u0ca8"; //n
Consonant[112] = "\u0caa"; //p
Consonant[102] = "\u0cab"; //f
Consonant[98] = "\u0cac"; //b
Consonant[109] = "\u0cae"; //m
Consonant[121] = "\u0caf"; //y
Consonant[114] = "\u0cb0"; //r
Consonant[108] = "\u0cb2"; //l
Consonant[76] = "\u0cb3"; //L
Consonant[118] = "\u0cb5"; //v
Consonant[119] = "\u0cb5"; //w
Consonant[115] = "\u0cb8"; //s
Consonant[120] = "\u0c95\u0ccd\u0cb7"; //kSh
Consonant[104] = "\u0cb9"; //h
Consonant[97] = ""; // just empty string
Consonant[VIRAM] = "\u0ccd"; // half letter
Consonant[ZWJ] = "\u200D"; // ZWJ
Consonant[ZWNJ] = "\u200C"; // half letter
Consonant[65] = "\u0cbe"; //A
Consonant[105] = "\u0cbf"; //i
Consonant[73] = "\u0cc0"; //I
Consonant[117] = "\u0cc1"; //u
Consonant[85] = "\u0cc2"; //U
Consonant[VRU] = "\u0cc3"; // VRU
Consonant[69] = "\u0cc7"; //E
Consonant[101] = "\u0cc6"; //e
Consonant[79] = "\u0ccb"; //O
Consonant[111] = "\u0cca"; //o
/*
Consonant[75] = "\u0958"; //K
Consonant[71] = "\u095a"; //G
Consonant[90]= "\u095b"; //Z
Consonant[70]= "\u095e"; //F
Consonant[89]= "\u095f"; //Y
*/ // not there in kannada


ConsonantCombination[0] = new Array(3);
ConsonantCombination[0][0]= 107; //k
ConsonantCombination[0][1]= 104; //h
ConsonantCombination[0][2]= "\u0c96"; // kh

ConsonantCombination[1] = new Array(3);
ConsonantCombination[1][0]= 103; //g
ConsonantCombination[1][1]= 104; //h
ConsonantCombination[1][2]= "\u0c98"; //gh

ConsonantCombination[2] = new Array(3);
ConsonantCombination[2][0]= 99; //c
ConsonantCombination[2][1]= 104; //h
ConsonantCombination[2][2]= "\u0c9a"; //ch

ConsonantCombination[3] = new Array(3);
ConsonantCombination[3][0]= 67; //C
ConsonantCombination[3][1]= 104; //h
ConsonantCombination[3][2]= "\u0c9b"; //Ch

ConsonantCombination[4] = new Array(3);
ConsonantCombination[4][0]= 84; //T
ConsonantCombination[4][1]= 104; //h
ConsonantCombination[4][2]= "\u0ca0"; //Th

ConsonantCombination[5] = new Array(3);
ConsonantCombination[5][0]= 68; //D
ConsonantCombination[5][1]= 104; //h
ConsonantCombination[5][2]= "\u0ca2"; //Dh

ConsonantCombination[6] = new Array(3);
ConsonantCombination[6][0]= 116; //t
ConsonantCombination[6][1]= 104; //h
ConsonantCombination[6][2]= "\u0ca5"; //th

ConsonantCombination[7] = new Array(3);
ConsonantCombination[7][0]= 100; //d
ConsonantCombination[7][1]= 104; //dh
ConsonantCombination[7][2]= "\u0ca7"; //dh

ConsonantCombination[8] = new Array(3);
ConsonantCombination[8][0]= 112; //p
ConsonantCombination[8][1]= 104; //ph
ConsonantCombination[8][2]= "\u0cab"; //ph

ConsonantCombination[9] = new Array(3);
ConsonantCombination[9][0]= 98; //b
ConsonantCombination[9][1]= 104; //h
ConsonantCombination[9][2]= "\u0cad"; //bh

ConsonantCombination[10] = new Array(3);
ConsonantCombination[10][0]= 115; //s
ConsonantCombination[10][1]= 104; //h
ConsonantCombination[10][2]= "\u0cb6"; //sh

ConsonantCombination[11] = new Array(3);
ConsonantCombination[11][0]= 83; //S
ConsonantCombination[11][1]= 104; //h
ConsonantCombination[11][2]= "\u0cb7"; //Sh

ConsonantCombination[12] = new Array(3);
ConsonantCombination[12][0]= 74; //J
ConsonantCombination[12][1]= 104; //h
ConsonantCombination[12][2]= "\u0c9c\u0ccd\u0c9e"; // Jh

ConsonantCombination[13] = new Array(3);
ConsonantCombination[13][0]= 97; //a
ConsonantCombination[13][1]= 97; //a
ConsonantCombination[13][2]= "\u0cbe"; //aa

ConsonantCombination[14] = new Array(3);
ConsonantCombination[14][0]= 101; //e
ConsonantCombination[14][1]= 101; //e
ConsonantCombination[14][2]= "\u0cc0"; //ee

ConsonantCombination[15] = new Array(3);
ConsonantCombination[15][0]= 111; //o
ConsonantCombination[15][1]= 111; //o
ConsonantCombination[15][2]= "\u0cc2"; //oo

ConsonantCombination[16] = new Array(3);
ConsonantCombination[16][0]= 97; //a
ConsonantCombination[16][1]= 105; //i
ConsonantCombination[16][2]= "\u0cc8"; //ai

ConsonantCombination[17] = new Array(3);
ConsonantCombination[17][0]= 97; //a
ConsonantCombination[17][1]= 117; //u
ConsonantCombination[17][2]= "\u0ccc"; //au

ConsonantCombination[18] = new Array(3);
ConsonantCombination[18][0] = 78; // N
ConsonantCombination[18][1] = 71; // G
ConsonantCombination[18][2] = "\u0c99"; //NG

ConsonantCombination[19] = new Array(3);
ConsonantCombination[19][0] = 78; // N
ConsonantCombination[19][1] = 89; // Y
ConsonantCombination[19][2] = "\u0c9e"; //NY

/*
ConsonantCombination[20] = new Array(3);
ConsonantCombination[20][0] = 75; // K
ConsonantCombination[20][1] = 104; // h
ConsonantCombination[20][2] = "\u0959"; //Kh

ConsonantCombination[21] = new Array(3);
ConsonantCombination[21][0] = 68; // D
ConsonantCombination[21][1] = 68; // D
ConsonantCombination[21][2] = "\u095c"; //DD

ConsonantCombination[22] = new Array(3);
ConsonantCombination[22][0] = 68; // D
ConsonantCombination[22][1] = 72; // H
ConsonantCombination[22][2] = "\u095d"; //DH

ConsonantCombination[23] = new Array(3);
ConsonantCombination[23][0] = 78; // N
ConsonantCombination[23][1] = 78; // N
ConsonantCombination[23][2] = "\u0929"; //NN

ConsonantCombination[24] = new Array(3);
ConsonantCombination[24][0] = 82; // R
ConsonantCombination[24][1] = 82; // R
ConsonantCombination[24][2] = "\u0931"; //RRa

ConsonantCombination[25] = new Array(3);
ConsonantCombination[25][0] = 76; // L
ConsonantCombination[25][1] = 76; // L
ConsonantCombination[25][2] = "\u0934"; //LL
*/

ConsonantCombination[20] = new Array(3);
ConsonantCombination[20][0]= 106; //j
ConsonantCombination[20][1]= 104; //h
ConsonantCombination[20][2]= "\u0c9d"; // jh

LangVowel[3] = Vowel;
LangVowelCombination[3] = VowelCombination;
LangConsonant[3] = Consonant;
LangConsonantCombination[3] = ConsonantCombination;
LangSymbol[3] = Symbol;

function initKB(lang) {
    Vowel = LangVowel[lang];
    VowelCombination = LangVowelCombination[lang];
    Consonant = LangConsonant[lang];
    ConsonantCombination = LangConsonantCombination[lang];
    Symbol = LangSymbol[lang];
}

var prevkey = 32;
var ppkey=32;
var hidden=false;
var posChanged = true;
var isEng = false;

var previousConsonant = false;
var previouspreviousConsonant = false;
var pVowel=false;
var pppC=false;
var isHinLetter=false;



function ClearAllParameters()
{
	prevkey = 32;
	hidden=false;
	posChanged = true;

	previousConsonant = false;
	previouspreviousConsonant = false;
	pppC=false;
	pVowel=false; 
	isHinLetter=false;
}

function changeCursor(txtarea)	{
	if (txtarea.createTextRange)	{
		txtarea.cursorPos = document.selection.createRange().duplicate();
	}
}
function GetVowelCombination(key0, key1)
{
	var i=0;
	for(i=0;i<VowelCombination.length;i++)
	{
		if((VowelCombination[i][0] == key0) && (VowelCombination[i][1]==key1))
			return VowelCombination[i][2];	
	}
}

function GetConsonantCombination(key0, key1)
{

	var i=0;
	//  alert(ConsonantCombination[i][0]+":"+ConsonantCombination[i][1]);
	for(i=0;i<ConsonantCombination.length;i++)
	{
		if((ConsonantCombination[i][0] == key0) && (ConsonantCombination[i][1]==key1))
		{
			// alert(key0+":"+key1);
			return ConsonantCombination[i][2];
		}	
	}
}



function isLetter(aChar)
{

	return ((aChar >= 'a') && (aChar <= 'z')) ||
	((aChar >= 'A') && (aChar <= 'Z'));
}


function isDigit(aChar)
{
	return ((aChar >= '0') && (aChar <= '9'));
}





var activeWord="";
var txtFieldTTHide=false;





function hideTxtBoxTT()
{
	if(!txtFieldTTHide)
	{

		hideTooltip('txtFieldInput');
		txtFieldTTHide=true;
	}
}
function displayRelatedWords(keyChar,awTableId)
{

	switch(keyChar)
	{
	case 'a':
	case 'o':
	case 'i':
	case 'I':
	case 'e':
	case 'E':
	case 'A':
	case 'O':
	case 'u':
	case 'U':
		activeWord="";
		break;

	case 'k':
	case 'g':
	case 'c':
	case 'C':
	case 'j':
	case 'J':
	case 'z':
	case 'T':
	case 'N':
	case 't':
	case 'd':
	case 'n':
	case 'p':
	case 'f':
	case 'b':
	case 'm':
	case 'y':
	case 'l':
	case 'v':
	case 's':
	case 'w':
	case 'x':

		activeWord=keyChar;
		break;
	case 'h':
	case 'G':
	case 'Y':
	case 'K':
	case 'G':
	case 'Z':
	case 'H':
	case 'F':
	case 'S':
	case 'r':
	case 'D':
	case 'L':
		activeWord+=keyChar;
	}
	displayInDiv(activeWord,awTableId);

}

function displayInDiv(aw,awTableId)
{

	var divPane=document.getElementById(awTableId);
	if(divPane==null)
	{
		return; 
	}
	//divPane.innerHTML="";
	switch(aw)
	{
	case 'k':
		displayCombination(divPane,'k','&#x0915;');
		break;

	case 'kh':
		displayCombination(divPane,'kh','&#x0916;');
		break;
	case 'g':
		displayCombination(divPane,'g','&#x0917;');
		break;
	case 'gh':
		displayCombination(divPane,aw,'&#x0918;');
		break;
	case 'c':
		displayAdditional(divPane,'ch','cha','Cha','&#x091A;','&#x091A;','&#x091B;');
		break;
	case 'ch':
		displayCombination(divPane,'ch','&#x091A;');
		break;
	case 'Ch':
		displayCombination(divPane,'Ch','&#x091B;');
		break;
	case 'NG':
		displayCombination(divPane,aw,'&#x0919;');
		break;
	case 'j':
		displayAdditional(divPane,aw,'za','Za','&#x091C;','&#x091D;','&#x095B;');
		break;
	case 'z':
		displayCombination(divPane,aw,'&#x091D;');
		break;
	case 'NY':
		displayCombination(divPane,aw,'&#x091E;');
		break;
	case 'T':
		displayCombination(divPane,aw,'&#x091F;');
		break;
	case 'Th':
		displayCombination(divPane,aw,'&#x0920;');
		break;
	case 'D':
		displayCombination(divPane,aw,'&#x0921;');
		break;
	case 'Dh':
		displayCombination(divPane,aw,'&#x0922;');
		break;
	case 'N':
		displayCombination(divPane,aw,'&#x0923;');
		break;
	case 't':
		displayAdditional(divPane,aw,'Ta','Tha','&#x0924;','&#x091F;','&#x0920;');
		break;
	case 'th':
		displayCombination(divPane,aw,'&#x0925;');
		break;
	case 'd':
		displayAdditional(divPane,aw,'Da','Dha','&#x0926;','&#x0921;','&#x0922;');
		break;
	case 'dh':
		displayCombination(divPane,aw,'&#x0927;');
		break;
	case 'n':
		displayAdditional(divPane,aw,'Na','NNa','&#x0928;','&#x0923;','&#x0929;');
		break;
	case 'p':
		displayCombination(divPane,aw,'&#x092A;');
		break;
	case 'f':
		displayCombination(divPane,aw,'&#x092B;');
		break;
	case 'b':
		displayCombination(divPane,aw,'&#x092C;');
		break;
	case 'bh':
		displayCombination(divPane,aw,'&#x092D;');
		break;
	case 'm':
		displayCombination(divPane,aw,'&#x092E;');
		break;
	case 'y':
		displayCombination(divPane,aw,'&#x092F;');
		break;
	case 'r':
		displayCombination(divPane,aw,'&#x0930;');
		break;
	case 'l':
		displayCombination(divPane,aw,'&#x0932;');
		break;
	case 'v':
		displayCombination(divPane,aw,'&#x0935;');
	case 'w':
		displayCombination(divPane,aw,'&#x0935;');
		break;
	case 's':
		displayAdditional(divPane,aw,'sha','Sha','&#x0938;','&#x0936;','&#x0937;');
		break;
	case 'sh':
		displayCombination(divPane,aw,'&#x0936;');
		break;
	case 'Sh':
		displayCombination(divPane,aw,'&#x0937;');
		break;
	case 'h':
		displayCombination(divPane,aw,'&#x0939;');
		break;
	case 'L':
		displayCombination(divPane,aw,'&#x0933;');
		break;
	case 'kSh':
		displayCombination(divPane,aw,'&#x0915;&#x094D;&#x0937;');
		break;
	case 'x':
		displayCombination(divPane,aw,'&#x0915;&#x094D;&#x0937;');
		break;
	case 'Jh':
		displayCombination(divPane,aw,'&#x091C;&#x094D;&#x091E;');
		break;
	case 'tr':
		displayCombination(divPane,aw,'&#x0924;&#x094D;&#x0930;');
		break;
	case 'LL':
		displayCombination(divPane,aw,'&#x0934;');
		break;
	case 'K':
		displayCombination(divPane,aw,'&#x0958;');
		break;
	case 'Kh':
		displayCombination(divPane,aw,'&#x0959;');
		break;
	case 'G':
		displayCombination(divPane,aw,'&#x095A;');
		break;
	case 'Z':
		displayCombination(divPane,aw,'&#x095B;');
		break;
	case 'DD':
		displayCombination(divPane,aw,'&#x095C;');
		break;
	case 'DH':
		displayCombination(divPane,aw,'&#x095D;');
		break;
	case 'F':
		displayCombination(divPane,aw,'&#x095E;');
		break;
	case 'Y':
		displayCombination(divPane,aw,'&#x095F;');
		break;

	}

}

function Get2DArray(row,col)
{
	var lngArray= new Array(row);
	for(var i=0;i<lngArray.length;i++)
	{
		lngArray[i]= new Array(col);
	}
	return lngArray;
}
function displayAdditional(divPane,el,el2,el3,luc,luc2,luc3)
{
	var lngArray=Get2DArray(17,2);

	var normalArray=GetNormalDisplayArray(el,luc);
	lngArray[0][0]=el2;
	lngArray[0][1]=luc2;
	lngArray[1][0]=el3;
	lngArray[1][1]=luc3;
	for(var i=0;i<normalArray.length;i++)
	{
		lngArray[i+2][0]=normalArray[i][0];
		lngArray[i+2][1]=normalArray[i][1];
	}
	displayArrayInTable(divPane,lngArray);

}
function GetNormalDisplayArray(el,luc)
{
	var lngArray=Get2DArray(15,2);
	lngArray[0][0]=(el);
	lngArray[0][1]=(luc+'&#x094D;');
	lngArray[1][0]=(el+'a');
	lngArray[1][1]=(luc);
	lngArray[2][0]=(el+'A');
	lngArray[2][1]=(luc+'&#x093E;');
	lngArray[3][0]=(el+'e');
	lngArray[3][1]=(luc+'&#x0947;');
	lngArray[4][0]=(el+'ai');
	lngArray[4][1]=(luc+'&#x0948;');
	lngArray[5][0]=(el+'i');
	lngArray[5][1]=(luc+'&#x093F;');
	lngArray[6][0]=(el+'I');
	lngArray[6][1]=(luc+'&#x0940;');

	lngArray[7][0]=(el+'o');
	lngArray[7][1]=(luc+'&#x094B;');

	lngArray[8][0]=(el+'au');
	lngArray[8][1]=(luc+'&#x094C;');

	lngArray[9][0]=(el+'u');
	lngArray[9][1]=(luc+'&#x0941;');

	lngArray[10][0]=(el+'U');
	lngArray[10][1]=(luc+'&#x0942;');

	lngArray[11][0]=(el+'M');
	lngArray[11][1]=(luc+'&#x0902;');
	lngArray[12][0]=(el+'~M');
	lngArray[12][1]=(luc+'&#x0901;');
	lngArray[13][0]=(el+'^');
	lngArray[13][1]=(luc+'&#x094D;&#x200D;');
	lngArray[14][0]=(el+'^^');
	lngArray[14][1]=(luc+'&#x094D;&#x200C;');
	return lngArray;

}
function displayCombination(divPane,el,luc)
{

	var lngArray=GetNormalDisplayArray(el,luc);

	displayArrayInTable(divPane,lngArray);

}




function displaykh(divPane)
{
	divPane.innerHTML+="kh|kha|khi|khI|khe";
}

function displayArrayInTable(tableDiv,lngArray)
{
	if(tableDiv==null)
	{
		return;
	}
	else
	{
		if(tableDiv.rows!=null)
		{
			if(tableDiv.rows.length!=null)
			{
				if(tableDiv.rows.length >=2)
				{

					tableDiv.deleteRow(1);

					tableDiv.deleteRow(0); 
				}
			} 
		}
		var newRow = tableDiv.insertRow(0);
		var newCol=newRow.insertCell(0);
		newCol.innerHTML=("<span>"+lngArray[0][1]+"</span>");
		for(var i=1;i<lngArray.length;i++)
		{

			newCol=newRow.insertCell(i);
			newCol.innerHTML=("<span class='awSpan2'>"+lngArray[i][1]+"</span>");

		} 
		newRow = tableDiv.insertRow(1);
		newCol=newRow.insertCell(0);
		newCol.innerHTML=("<span>"+lngArray[0][0]+"</span>");
		for(var i=1;i<lngArray.length;i++)
		{
			newCol=newRow.insertCell(i);
			newCol.innerHTML=("<span class='awSpan2'>"+lngArray[i][0]+"</span>");

		}  

	}

}

function displayArray(divPane,lngArray)
{
	var pad="";
	if(lngArray[0][0].length==2)
	{
		pad=" ";
	}

	divPane.innerHTML+=("<span>"+lngArray[0][1]+"</span>");
	for(var i=1;i<lngArray.length;i++)
	{
		divPane.innerHTML+=("<span class='awSpan2'>"+lngArray[i][1]+pad+"</span>");

	}  
	divPane.innerHTML+="<br>";

	divPane.innerHTML+=("<span>"+lngArray[0][0]+"</span>");
	for(var i=1;i<lngArray.length;i++)
	{
		divPane.innerHTML+=("<span class='awSpan2'>"+lngArray[i][0]+"</span>");

	}  
	divPane.innerHTML+="<br>";

}


function GetKeyChar(evt)
{
	var e = window.event? event : evt;
	if( e.altKey || e.ctrlKey)
	{
		return true;
	}
	var key=0;
	var keychar='';
	if ( document.all )
	{
		key = e.keyCode;

	}	
	else
	{
		key = e.which;

	}
	if(key==null)
	{
		key=evt.keyCode?evt.keyCode:evt.which;
	}



	keychar = String.fromCharCode(key);

	return keychar;


}
function HindiKeyBoard(){}

var inputBoxIds= new Array();
var inputBoxCount=0;
function GetNewKeyboard(elemID,awTableId)
{
	GetNewKeyboard(elemID,"awTable");
}
function GetNewKeyboard(elemID,awTableId)
{

	var newHinKB= new HindiKeyBoard();
	newHinKB.prevkey = 32;
	newHinKB.ppkey=32;
	newHinKB.hidden=false;
	newHinKB.posChanged = true;
	newHinKB.isEng = false;

	newHinKB.previousConsonant = false;
	newHinKB.previouspreviousConsonant = false;
	newHinKB.pVowel=false;
	newHinKB.pppC=false;
	newHinKB.isHinLetter=false;
	newHinKB.elemID=elemID;
	newHinKB.awTableId=awTableId;
	return newHinKB;
}

function ClearAllParameters(hinKB)
{
	hinKB.prevkey = 32;
	hinKB.hidden=false;
	hinKB.posChanged = true;

	hinKB.previousConsonant = false;
	hinKB.previouspreviousConsonant = false;
	hinKB.pppC=false;
	hinKB.pVowel=false; 
	hinKB.isHinLetter=false;
}
function positionChange(evt,hinKB)
{

	var keyCode = 
		document.layers ? evt.which :
			document.all ? event.keyCode :
				document.getElementById ? evt.keyCode : 0;
	if(keyCode==null)
	{
		keyCode=(evt.keyCode)?evt.keyCode:evt.which;
	}

	if (keyCode == 123)
	{
		hinKB.isEng = !hinKB.isEng;
		ClearAllParameters(hinKB);
	}

	if (keyCode >= 37 && keyCode <=40)
	{
		hinKB.posChanged = true;
	}

	if(keyCode==8)
	{


		hinKB.previousConsonant=hinKB.previouspreviousConsonant;
		hinKB.previouspreviousConsonant=hinKB.pppC;
		hinKB.pppC=false;
		if(hinKB.isHinLetter)
		{
			ClearAllParameters(hinKB);
		}


		var txtInpt=document.getElementById(hinKB.elemID);
		if(txtInpt.value==null || txtInpt.value=="" || txtInpt.value.length==1)
		{
			ClearAllParameters(hinKB);
		}
	}	
}
function change(evt,hinKB)
{      

	var txtarea=document.getElementById(hinKB.elemID);
	var displace = 0;
	var text='';
	var previousValue = "";
	//var e = evt; //(evt)? e: ((window.event)? event : null);
	var e = window.event? event : evt;
	if( e.altKey || e.ctrlKey)
	{
		return true;
	}
	var key=0;
	var keychar='';
	var shift=false;
	var pos= 0; // doGetCaretPosition (txtarea);
	var prevpos = 0;
	if ( document.all )
	{
		key = e.keyCode;

	}	
	else
	{
		key = e.which;

	}
	if(key==null)
	{
		key=evt.keyCode?evt.keyCode:evt.which;
	}


	if ((key <32) || (key >=33 && key <=47) ||(key>=59 && key <=64)||(key>=91 && key<=96 && key!=94)||(key>=123 && key<=127 && key!=126) || key >255 )
	{
		ClearAllParameters(hinKB);
		return true;
	}


	keychar = String.fromCharCode(key);
	if(hinKB.posChanged)
	{
		hinKB.prevkey = 32;
		hinKB.hidden=false;
		prevpos = 0;
		hinKB.previousConsonant = false;
		hinKB.previouspreviousConsonant = false;
		hinKB.pppC=false;

	}
	displayRelatedWords(keychar,hinKB.awTableId);
	switch(keychar)
	{
	case "a":
		var cComb = GetConsonantCombination(hinKB.prevkey,key);
		var vComb = GetVowelCombination(hinKB.prevkey,key);
		hinKB.pVowel=true;

		if(hinKB.previousConsonant)
		{
			displace =0;
			text=Consonant[key]; // nothing to append. just remove viram
			hinKB.isHinLetter=true;
		}
		else if (typeof(vComb) != 'undefined')
		{
			if(!hinKB.previouspreviousConsonant)
			{

				displace --; // aa, ai, au.......
				text = vComb;
			}
			else
			{
				displace = 0;
				text = cComb;
			}
			hinKB.isHinLetter=false;
		}
		else
		{

			displace = 0;						
			text = Vowel[key]; 
			hinKB.isHinLetter=false;
		}

		hinKB.pppC=hinKB.previouspreviousConsonant;
		hinKB.previouspreviousConsonant = hinKB.previousConsonant;
		hinKB.previousConsonant = false;
		hinKB.hidden=false;
		break;
	case "e":
	case "i":
	case "o":
	case "u":
	case "A":
	case "I":
	case "U":
	case "O":
	case "E":
		var cComb = GetConsonantCombination(hinKB.prevkey,key);
		var vComb = GetVowelCombination(hinKB.prevkey,key);
		hinKB.pVowel=true;
		hinKB.isHinLetter=false;
		if(hinKB.previousConsonant)
		{
			displace =0;
			text=Consonant[key]; // nothing to append. just remove viram

		}
		else if (typeof(vComb) != 'undefined')
		{
			if(!hinKB.previouspreviousConsonant)
			{

				displace --; // aa, ai, au.......
				text = vComb;
			}
			else
			{
				if(hinKB.prevkey!=key)
				{
					displace = 0;
				}
				else
				{

					displace =displace-1;
				}
				text = cComb ;
			}
		}
		else
		{
			displace = 0;
			text = Vowel[key]; 
		}
		hinKB.pppC=hinKB.previouspreviousConsonant;
		hinKB.previouspreviousConsonant = hinKB.previousConsonant;
		hinKB.previousConsonant = false;
		hinKB.hidden=false;
		break;
	case 'R':
		if(hinKB.previousConsonant)
		{
			displace=0; // replace the viram
			text = Consonant[VRU];
			// here no need for another U in VRU. by detecting VR it is assumed the whole word
		}
		else
		{
			displace=0; // nothing to displace
			text = Vowel[key];
		}
		hinKB.pppC=hinKB.previouspreviousConsonant;
		hinKB.previouspreviousConsonant = hinKB.previousConsonant;
		hinKB.previousConsonant = false;
		hinKB.hidden = false;
		hinKB.prevkey = key;
		hinKB.pVowel=true;
		hinKB.isHinLetter=false;
		break;
	case '~':
		displace = 0;
		text = "~";
		hinKB.pppC=hinKB.previouspreviousConsonant;
		hinKB.previouspreviousConsonant = hinKB.previousConsonant;
		hinKB.previousConsonant = false;
		hinKB.hidden = false;
		prevchar = keychar;
		hinKB.pVowel=true;
		hinKB.isHinLetter=false;
		break;
	case '^':
		if(hinKB.prevkey==126)
		{
			displace -=1;
			text="^";
		}else if(hinKB.previousConsonant)
		{
			text = Consonant[VIRAM]+Consonant[ZWJ] ;
		}
		else if(hinKB.prevkey == key)
		{
			displace -=2;
			text = Consonant[VIRAM]+Consonant[ZWNJ] ;
		}
		else
		{
			text="^";
		}
		hinKB.pppC=hinKB.previouspreviousConsonant;
		hinKB.previouspreviousConsonant = hinKB.previousConsonant;
		hinKB.previousConsonant = false;
		hinKB.hidden = false;
		prevchar = keychar;
		hinKB.isHinLetter=false;
		break;



	case 'M':
		if(hinKB.prevkey!=126)
		{
			displace = 0;
			text = Consonant[key];
		}
		else
		{
			displace -=1;
			text = Consonant[94];
		}
		hinKB.pppC=hinKB.previouspreviousConsonant;
		hinKB.previouspreviousConsonant = hinKB.previousConsonant;
		hinKB.previousConsonant = false;
		hinKB.hidden = false;
		prevchar = hinKB.keychar;
		hinKB.pVowel=true;
		hinKB.isHinLetter=false;
		break;
	case ' ':
		hinKB.pVowel=false;                      
		if(hinKB.prevkey==32)
		{
			return;
		}

		displace = 0;

		text = Symbol[key];
		hinKB.pppC=hinKB.previouspreviousConsonant;
		hinKB.previouspreviousConsonant = hinKB.previousConsonant;
		hinKB.previousConsonant = false;
		hinKB.hidden = false;
		hinKB.ppkey=hinKB.prevkey;
		hinKB.prevkey = key;
		hinKB.isHinLetter=false;
		break;
	default:
		var cComb = GetConsonantCombination(hinKB.prevkey,key);
	hinKB.pVowel=false; 
	hinKB.isHinLetter=false;
	if (hinKB.hidden)
	{
		if(typeof(cComb) !='undefined')
		{
			displace = 0; // because previous word was not shown in textarea.
			if(hinKB.previouspreviousConsonant)
			{
				text = Consonant[VIRAM]+cComb ;//+ Consonant[VIRAM]; // letter + viram

			}
			else
			{
				text = cComb;

			}
			ClearAllParameters(hinKB);
			hinKB.previouspreviousConsonant = false;
			hinKB.pppC=false;

			hinKB.previousConsonant = true;
		}
		else if (typeof(Consonant[key]) !='undefined')
		{
			displace = 0;
			if(hinKB.previousConsonant && !hinKB.previouspreviousConsonant)
			{
				text = Consonant[VIRAM]+Consonant[key] ;//+ Consonant[VIRAM]; // letter + viram
			}
			else
			{
				text = Consonant[key] ;
			}
			ClearAllParameters(hinKB);
			hinKB.pppC=hinKB.previouspreviousConsonant;
			hinKB.previouspreviousConsonant = hinKB.previousConsonant;
			hinKB.previousConsonant = true;
			hinKB.hidden = false;
		}
		else
		{
			displace =0;
			hinKB.pppC=hinKB.previouspreviousConsonant;
			hinKB.previouspreviousConsonant = hinKB.previousConsonant;
			hinKB.previousConsonant = false;
		}
	}
	else
	{
		if(typeof(cComb) !='undefined')
		{
			displace -=1; // for d, dh, D, Dh etc.
			text = cComb;
			ClearAllParameters(hinKB);
			hinKB.pppC=hinKB.previouspreviousConsonant;
			hinKB.previouspreviousConsonant = false;
			//previouspreviousConsonant = previousConsonant;
			hinKB.previousConsonant = true;
		}
		else if(typeof(Consonant[key])!='undefined')
		{
			displace = 0;
			if(hinKB.previousConsonant && !hinKB.previouspreviousConsonant)
			{
				text = Consonant[VIRAM]+Consonant[key] ;//+ Consonant[VIRAM]; // letter + viram
			}
			else
			{
				text = Consonant[key] ;

			}
			ClearAllParameters(hinKB);
			hinKB.pppC=hinKB.previouspreviousConsonant;
			hinKB.previouspreviousConsonant = hinKB.previousConsonant;
			hinKB.previousConsonant = true;
		}
		else if (typeof(Symbol[key]) != 'undefined')
		{
			displace =0;
			text = Symbol[key];
			hinKB.pppC=hinKB.previouspreviousConsonant;
			hinKB.previouspreviousConsonant = hinKB.previousConsonant;
			hinKB.previousConsonant = false;
		}
		else
		{
			hinKB.pppC=hinKB.previouspreviousConsonant;
			hinKB.previouspreviousConsonant = hinKB.previousConsonant;
			hinKB.previousConsonant = true;
			hinKB.hidden = true;
		}

	}
	}
	hinKB.ppkey=hinKB.prevkey;
	hinKB.prevkey = key;


	if(txtarea.setSelectionRange)
	{
		// Mozilla specific
		pos = txtarea.selectionStart;
		var s1 = txtarea.value.substring(0,pos + displace);
		var s2 = txtarea.value.substring(pos, txtarea.value.length);
		var scrollPos = txtarea.scrollTop;
		if(typeof(text) != 'undefined')
			prevpos = pos + displace + text.length;
		else
			prevpos = pos + displace;
		txtarea.value = s1 + text + s2;

		txtarea.scrollTop = scrollPos;
		txtarea.focus();
		txtarea.setSelectionRange(prevpos,prevpos);
	}
	else if (txtarea.createTextRange && txtarea.cursorPos)
	{
		// IE specific
		var range = txtarea.cursorPos;
		range.moveStart('character', displace);
		range.text =	(range.text.charAt(range.text.length - 1)	== ' ' ? text +	' '	: text);
		range.collapse(false);
		range.scrollIntoView(true);
	}
	else
	{
		// Other browser
		if (displace==0)
		{
			txtarea.value += text;
		}
		else
		{
			txtarea.value =	txtarea.value.substring(0, txtarea.value.length-1) + text;
		}
	}
	txtarea.focus();
	hinKB.posChanged=false;
	return false;
}
function processInput(evt,hinKB)
{

	return change(evt,hinKB);
}


/* HinkHoj APIs */
function TextBoxInput()
{
	//parameters
	//Id
	//Name
	//Class
	//Value
	//Size
	//UseGoogle
}
function TextAreaInput()
{
	//parameters
	//Id
	//Name
	//Class
	//Value
	//Size
	//Rows
	//Columns
	//Logo
	//UseGoogle
}
function CreateHindiGTextBox(elementId)
{
	hinTextBoxObj= new TextBoxInput();
	hinTextBoxObj.Id=elementId;
	hinTextBoxObj.Name=elementId;
	hinTextBoxObj.Value="";
	//alert(hinTextBoxObj.Value);
	hinTextBoxObj.Size=60;
	hinTextBoxObj.Help=false;
	hinTextBoxObj.UseHinkhoj=false;
	hinTextBoxObj.Logo=false; 
	CreateHindiTextBoxSelectedParam(hinTextBoxObj);
}
function CreateCustomHindiGTextBox(elementId,defaultValue,textBoxSize)
{
	hinTextBoxObj= new TextBoxInput();
	hinTextBoxObj.Id=elementId;
	hinTextBoxObj.Name=elementId;
	hinTextBoxObj.Value=defaultValue;
	//alert(hinTextBoxObj.Value);
	hinTextBoxObj.Size=textBoxSize;
	hinTextBoxObj.Help=false;
	hinTextBoxObj.UseHinkhoj=false;
	hinTextBoxObj.Logo=false;
	CreateHindiTextBoxSelectedParam(hinTextBoxObj);
}
function CreateHindiTextBox(elementId)
{
	CreateCustomHindiTextBox(elementId,"",60,false);
}
function CreateCustomHindiTextBox(elementId,defaultValue,textBoxSize,showHelp)
{
	hinTextBoxObj= new TextBoxInput();
	hinTextBoxObj.Id=elementId;
	hinTextBoxObj.Name=elementId;
	hinTextBoxObj.Value=defaultValue;
	//alert(hinTextBoxObj.Value);
	hinTextBoxObj.Size=textBoxSize;
	hinTextBoxObj.Help=showHelp;
	if(!showHelp)
	{
		hinTextBoxObj.Logo=false; 
	}
	else
	{
		hinTextBoxObj.Logo=true;
	}
	hinTextBoxObj.UseHinkhoj=true;
	CreateHindiTextBoxSelectedParam(hinTextBoxObj);
}
function CreateHindiTextBoxSelectedParam(textBoxParam)
{
	//alert("in CreateHindiTextBoxSelectedParam: Id = "+textBoxParam.Id);
	if(textBoxParam.Id==null)
	{
		alert("Error: Id can't be NULL");
		return;
	}
	var awId=textBoxParam.Id+"_awTable";
	var cbId=textBoxParam.Id+"_cbId";
	//alert(awId);
	if(textBoxParam.UseHinkhoj)
	{
		inputBoxIds[inputBoxCount] =GetNewKeyboard(textBoxParam.Id,awId);
	}

	document.write("<input type='text'");
	if(textBoxParam.Value!=null)
	{
		document.write(" value='"+textBoxParam.Value+"'"); 
	} 
	if(textBoxParam.Size!=null)
	{
		document.write(" size='"+textBoxParam.Size+"'"); 
	}
	if(textBoxParam.Class!=null)
	{
		document.write(" Class='"+textBoxParam.Class+"'"); 
	}
	if(textBoxParam.Name!=null)
	{
		document.write(" Name='"+textBoxParam.Name+"'"); 
	}

	document.write(" id='"+textBoxParam.Id+"'");
	if(textBoxParam.UseHinkhoj)
	{
		document.write(" onkeypress='if (!inputBoxIds["+inputBoxCount+"].isEng){ return processInput(event,inputBoxIds["+inputBoxCount+"]);} else {return true;}' onKeyUp='changeCursor(this);' onkeydown='positionChange(event,inputBoxIds["+inputBoxCount+"]);' onFocus='changeCursor(this);' onClick='changeCursor(this);'");
	}
	else
	{
		document.write(" onmouseout=ChangeHindi('"+textBoxParam.Id+"') ");
	}
	document.write(">");
	if(!textBoxParam.UseHinkhoj)
	{
		document.write('<input type="checkbox" id="'+cbId+'" onclick="javascript:checkboxClickHandler(\''+cbId+'\')" checked>Hindi-[<font color="green">Use <b>ALT-k</b> to change langauge</font>]</input>');
	}
	if(textBoxParam.Logo!=null && textBoxParam.Logo)
	{
		document.write("<a style='text-decoration:none' href='http://www.hinkhoj.com/api'><span style='font-size:8pt;color:black'>Powered By:</span><span style='font-size:8pt;color:black;margin-left:5px'><b>HinKhoj.Com</b></span></a>"); 
	}

	if(textBoxParam.Help!=null && textBoxParam.Help)
	{
//		alert(awId);
		document.write("<center><table width='100%' id='"+awId+"' border='0' class='awDiv'></table></center>");
	}
	if(textBoxParam.UseHinkhoj)
	{
		inputBoxCount++;
	}

}
function CreateHindiTextArea(elementId)
{
	//alert("CreateHindiTextArea");
	CreateCustomHindiTextArea(elementId,"",50,3,false);
}
function CreateCustomHindiTextArea(elementId,defaultValue,columns,rows,showHelp)
{
	//alert("CreateCustomHindiTextArea");
	textAreaInpt= new TextAreaInput();
	textAreaInpt.Id=elementId;
	textAreaInpt.Name=elementId;
	textAreaInpt.Value=defaultValue;
	textAreaInpt.Cols=columns;
	textAreaInpt.Rows=rows;
	textAreaInpt.Help=showHelp;
	textAreaInpt.UseHinkhoj=true;
	CreateHindiTextAreaSelectedParam(textAreaInpt);
}

function CreateCustomHindiGTextArea(elementId,defaultValue,columns,rows)
{
	//alert("CreateCustomHindiTextArea");
	textAreaInpt= new TextAreaInput();
	textAreaInpt.Id=elementId;
	textAreaInpt.Name=elementId;
	textAreaInpt.Value=defaultValue;
	textAreaInpt.Cols=columns;
	textAreaInpt.Rows=rows;
	hinTextBoxObj.Help=false;
	hinTextBoxObj.UseHinkhoj=false;
	hinTextBoxObj.Logo=false;
	CreateHindiTextAreaSelectedParam(textAreaInpt);
}

function CreateHindiTextAreaSelectedParam(textAreaParam)
{ 
//	alert("in CreateHindiTextAreaSelectedParam: Id = "+textAreaParam.Id);
	if(textAreaParam.Id==null)
	{
		alert("Error: Id can't be NULL");
		return;
	}
	var awId=textAreaParam.Id+"_awTable";
	var cbId=textAreaParam.Id+"_cbId";
	//alert(awId);
	if(textAreaParam.UseHinkhoj)
	{
		inputBoxIds[inputBoxCount] =GetNewKeyboard(textAreaParam.Id,awId);
	}
	document.write("<textarea ");
	if(textAreaParam.Cols!=null)
	{
		document.write(" cols='"+textAreaParam.Cols+"'" );
	}
	if(textAreaParam.Rows!=null)
	{
		document.write(" rows='"+textAreaParam.Rows+"'" );
	}
	if(textAreaParam.Class!=null)
	{
		document.write(" Class='"+textAreaParam.Class+"'" );
	}
//	alert(textAreaParam.Name);
	if(textAreaParam.Name!=null)
	{
		document.write(" Name='"+textAreaParam.Name+"'" );
	}

	document.write(" id='"+textAreaParam.Id+"' ");
	if(textAreaParam.UseHinkhoj)
	{
		document.write(" onkeypress='if (!inputBoxIds["+inputBoxCount+"].isEng){ return processInput(event,inputBoxIds["+inputBoxCount+"]);} else {return true;}' onKeyUp='changeCursor(this);' onkeydown='positionChange(event,inputBoxIds["+inputBoxCount+"]);' onFocus='changeCursor(this);' onClick='changeCursor(this);'");
	}
	document.write(" >");


	if(textAreaParam.Value!=null)
	{
		//alert(textAreaParam.Value);
		document.write(textAreaParam.Value);
	}
	document.write("</textarea>");
	if(!textAreaParam.UseHinkhoj)
	{
		document.write('<input type="checkbox" id="'+cbId+'" onclick="javascript:checkboxClickHandler(\''+cbId+'\')" checked>Hindi-[<font color="green">Use <b>ALT-k</b> to change langauge</font>]</input>');
	}
	if(textAreaParam.Help!=null && textAreaParam.Help)
	{
//		alert(awId);
		document.write("<center><table width='100%' id='"+awId+"' border='0' class='awDiv'></table></center>");
	}
	if(textAreaParam.UseHinkhoj)
	{
		inputBoxCount++;
	}
}
