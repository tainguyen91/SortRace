/* Project 2: Sort Race- CPSC-335-03 
by Nidhi Shah ( nidhi989@csu.fullerton.edu)& 
Emily Pham ( tpham523@csu.fullerton.edu)&
Tai Nguyen ( tainguyen@csu.fullerton.edu)

This Javascript file includes the functions to make the bot move, check the color of each cells in a 3-cell
window, then generate the appropriate color for the child cell 

The code is based on the source code provided by Professor Siska with our own modification */

var input2d = [['0','5','A','6','2','7','B','2','B','6','0','3'],
['0','6','5','6','6','7','1','0','4','0','B','A'],
['0','6','8','4','B','8','9','3','5','7','5','4'],
['0','7','9','A','2','1','8','3','4','B','6','5'],
['0','9','4','8','7','8','6','2','2','6','1','6'],
['1','A','B','3','4','7','9','0','5','2','8','6'],
['2','8','6','1','0','3','4','2','7','8','5','9'],
['3','0','5','3','0','4','7','8','6','A','2','1'],
['3','2','8','4','7','6','5','1','0','B','A','9'],
['3','4','2','7','5','6','1','8','9','0','B','A'],
['4','1','B','3','8','2','6','2','1','9','8','5'],
['4','6','3','7','9','0','1','5','B','8','A','2'],
['5','3','5','1','A','3','3','A','9','9','B','B'],
['5','9','3','4','7','9','0','8','8','A','1','5'],
['5','9','A','2','2','A','4','4','A','3','9','4'],
['7','1','9','2','0','6','8','B','3','4','5','A'],
['7','2','B','3','A','5','4','1','6','9','8','0'],
['8','1','A','3','9','2','0','1','0','A','9','1'],
['8','9','4','0','A','5','2','B','1','6','3','7'],
['A','6','9','3','5','4','2','B','7','0','1','8'],
['A','9','4','2','5','B','1','6','8','7','3','0'],
['A','A','0','2','3','B','7','2','3','5','6','4'],
['B','4','0','1','6','3','8','A','2','9','7','5'],
['B','5','8','6','1','7','9','2','A','4','0','3']];

var aInput = ['0','5','A','6','2','7','B','2','B','6','0','3'];

// Make global g_canvas JS 'object': a key-value 'dictionary'.
var g_canvas = {
    cell_size: 30,
    wid: 1400,
    hgt: 3000
}; // JS Global var, w canvas size info.
var g_frame_cnt = 0; // Setup a P5 display-frame counter, to do anim
var g_frame_mod = 2; // Update ever 'mod' frames.
var g_stop = 0; // Go by default.
var isSorted = false;
var even = 0;

function setup() // P5 Setup Fcn
{
    
    let sz = g_canvas.cell_size;
    let width = g_canvas.wid; 
    let height = g_canvas.hgt;
    createCanvas(width, height);
  
    background(255,255,255)
    
    textSize(30);
    text('Gold \'s Poresort', 150, 50);
    text('Mergesort', 600, 50);
    text('Quicksort', 1000, 50);
}

var g_bot = {
    x: -1,
    y: 0
}; // Coordinates of the bot
var g_box = {
    t: 1,
    hgt: 100,
    l: 1,
    wid: 100
}; // Box in which bot can move.

function move_bot() 
{
  
}

function draw_bot() // Convert bot pox to grid pos & draw bot.
{
    
}

function fillCell(rx, ry, rcolor) { // paint the child cell
    
}


function draw() // P5 Frame Re-draw Fcn, Called for Every Frame.
{
    ++g_frame_cnt;
    if (!g_stop) {
        frameRate(1);
        draw_array(); 
    }
    
}

// draw black array from an array input
function draw_array()
{
	var idxA = 0;
	var width = aInput.length*g_canvas.cell_size;
    var height = g_canvas.cell_size;	
    var alignx =  20;
    var aligny = 90;
    fill(255, 204, 0);
    rect( alignx , aligny + (g_frame_cnt-1)*height, width, height );
    
    //moveTo( 90, 300 );
    //stroke('black');
    for(var ix = alignx; ix < width + alignx; ix += g_canvas.cell_size )
    {
    line (ix + g_canvas.cell_size, aligny + (g_frame_cnt-1)*height, ix + g_canvas.cell_size, aligny+ (g_frame_cnt-1)*height+height);
    stroke('black');
    text(aInput[idxA], ix +5, aligny + g_frame_cnt*height- 5);
    idxA++;
    }
    poresort(aInput);
    
    if( isSorted == true)
    {
        g_stop = !g_stop;
    }


}

function keyPressed() { // stop the application if a key is pressed
    g_stop = !g_stop;
}

function poresort(aInput)
{
    isSorted = true
    if ( even % 2 == 0 && isSorted)
    {
        for (var i=0; i<= aInput.length-2; i=i+2) 
        { 
            if (aInput[i] > aInput[i+1]) 
            { 
                swap (aInput, i, i+1)
                isSorted = false; 
            } 
        } 
    }
    else if (isSorted)
            {
                for (var i=1; i<=aInput.length-2; i=i+2) 
                { 
                    if (aInput[i] > aInput[i+1]) 
                    { 
                        swap (aInput, i, i+1)
                        isSorted = false; 
                    } 
                }
            }
    even++;
}

function swap(aInput, a, b)
{

var temp = aInput[a];
	aInput[a] = aInput[b];
	aInput[b] = temp;
}