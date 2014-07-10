var Vowel;
var VowelCombination;
var Consonant;
var ConsonantCombination;
var Symbol;

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

LangVowel[1] = Vowel;
LangVowelCombination[1] = VowelCombination;
LangConsonant[1] = Consonant;
LangConsonantCombination[1] = ConsonantCombination;
LangSymbol[1] = Symbol;

// BENGALI -----------------------------------

Vowel = new Array(123);
VowelCombination = new Array(6);
Consonant = new Array(123);
ConsonantCombination = new Array(27);
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

ConsonantCombination[26] = new Array(3);
ConsonantCombination[26][0]= 106; //j
ConsonantCombination[26][1]= 104; //h
ConsonantCombination[26][2]= "\u099d"; // jh

LangVowel[2] = Vowel;
LangVowelCombination[2] = VowelCombination;
LangConsonant[2] = Consonant;
LangConsonantCombination[2] = ConsonantCombination;
LangSymbol[2] = Symbol;

// KANNADA -------------------------------------

Vowel = new Array(123);
VowelCombination = new Array(6);
Consonant = new Array(123);
ConsonantCombination = new Array(27);
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

ConsonantCombination[26] = new Array(3);
ConsonantCombination[26][0]= 106; //j
ConsonantCombination[26][1]= 104; //h
ConsonantCombination[26][2]= "\u0c9d"; // jh

LangVowel[3] = Vowel;
LangVowelCombination[3] = VowelCombination;
LangConsonant[3] = Consonant;
LangConsonantCombination[3] = ConsonantCombination;
LangSymbol[3] = Symbol;
