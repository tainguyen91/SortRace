/* Project 1: Cella Rule 150 - CS335-02 
by Nidhi Shah ( nidhi989@csu.fullerton.edu)& 
Emily Pham ( tpham523@csu.fullerton.edu)&
Tai Nguyen ( tainguyen@csu.fullerton.edu)

This Javascript file draws a grid with major and minor lines.

Borrowed from Professor Siska. */

function draw_grid( rminor, rmajor, rstroke ) 
{
    stroke( rstroke );
    let sz = g_canvas.cell_size;
    let width = g_canvas.wid*sz;
    let height = g_canvas.hgt*sz
    for ( var ix = 0; ix < width; ix += rminor )
    {
        let big_linep = (ix % rmajor == 0);
        let line_wgt = 1;
        if (big_linep) line_wgt = 2;
        strokeWeight( line_wgt );
        line( ix, 0, ix, height );
        strokeWeight( 1 );
    
    }
    for ( var iy = 0; iy < height; iy += rminor )
    {
        let big_linep = (iy % rmajor == 0);
        let line_wgt = 1;
        if (big_linep) line_wgt = 2;
        strokeWeight( line_wgt );
        line( 0, iy, width, iy );
        strokeWeight( 1 );

    }
}
