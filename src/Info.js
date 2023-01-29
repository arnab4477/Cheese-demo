const Info = {
  intro: {
    heading: `What is CheeseJS`,
    text: `CheeseJS is a simple yet functional Web Component library for building customizable Chess UI. It is built with the
               StencilJS and supports move validations according to the rules of Chess. This is the website for the library
               showcasing its features, addressing its limitations and my future plabs with the library and writing about the hows
               and the whys I decided to build it. As of now, the library only has 3 importable Web Components, that get incrementally
               more complex and functional. They are <checker-board>, <chess-board>> and <analysis-board>`,
  },
  checkerBoard: {
    heading: `The <checker-board> Component`,
    text: `The <checker-board> component is the simplest component of all. It is exactly what its name suggests,
    a checker board. To be honest, there is not much to write about this component. I built this component just
    to get started with the project and see if I could build a simple checker or not. I also had to make sure I
    build it in a way that I could access all the squares and their info as they would be required for the later
    more complex components. It takes two optional attributes, "light" and "dark" which will set the colors of the
    light squares and dark squares respectively. And that's basically all there is to it`,
  },
  chessBoard: {
    heading: `The <chess-board> Component`,
    text: `This component places the pieces on the Chess board according to a given (optional) FEN string, If no FEN is
    provided then it starts with the default starting position. The pieces can be moved on the board however for this
    component, no move validation is implemented. This component, just as its name suggests, is supposed to mimic a Chess
    board where one can move any piece to any square regardless of its legality. To create this component I had to first
    create a HTML string from an FEN, making sure the pieces could be moved (first drag and drop was implemented then I later
    added click events). The FEN this component takes must be the simplified version of the FEN that only shows the piece positions
    and not game staes like who's move it is, if a color has castling rights etc because this component does not actually create a playable
    Chess board. This is largely similar to the "Board editor" feature of Lichess`,
  },
  analysisBoard: {
    heading: `The <analysis-board> Component`,
    text: `This component is the most complex and functional of all. It takes <chess-board> component and adds move validations
    on it. Not only that, <analysis-board> also remembers various game states such as whose move it is and takes into account special
    moves such as castling (also remembers who has the rights to castle), en passant (Holy hell) and Pawn promotion; thus making it a
    playable componenet. The only things missing from making it an actual game are the clocks and a mate detection, both of which are part
    of my future plans for this library`,
  },
  process: {
    heading: `Why (and a bit of how) I built this`,
    text: [
      `As a long time Chess player, I always wanted to build some cool Chess programs. I had built a website for r/AnarchyChess
    earlier but it was just a simple static website, and did not have any actual Chess logic in it. During that time someone (on r/AnarchyChess)
    suggested me to build a Chess program with custom meme rules and if possible, with custom pieces. I also had a plan to create my own Chess
    bot and train that with the thousands of games I have played across the major Chess platforms so that it plays like me. But it seemed way out of my pay grade as I had
    no experience in ML and AI. Then the idea of the Web Component library came.`,

      `Web Components are natively built into the browser and can be shared and used in other programs as easily as using a regular HTML element. In the
    age where front end development is dominated by component based libraries/frameworks, the value of Web Components increases as they are framework agonistic.
    My original idea was to create a library that would be very easy to use for the users as all the functionality would come pre built. I also wanted to design
    and build the whole thing from scratch without any external guidance or help, and I would say I have been successful in that regard.`,

      `I took an incremental approach to building the library. Starting at the very bottom with the simplest tasks and making it more complex as I go on. That is how the
    first component, <checker-board> was built. The Regular Expresion needed for parsing the FEN for creating the <chess-board> was not mine, I borrowed it from some
    stackexchange thread but using that to place the pieces on the Chess board was rather easy. I have used the squares' and pieces' ids to represent their names which
    made the whole drag and drop possible`,

      `However the biggest challenge was creating the move validation. First I had to be able to store and modify the whole board's position and I used an onject to do that.
    The boardMap object had 8 properties each representing a file, each of them has their own 8 properties each representing a rank. The ranks' values can either be an empty
    string or one character representing a piece following the FEN style ('P' is white pawn, 'n' is black knight etc). boardMap[file][rank] could be used to access or modify a piece.
    For example, in the starting position, boardMap['a']['1'] would return 'R', a white rook which is pn the a1 square`,

      `Now let me tell you about one reference bug that ruined my life for like 5 days. Objects are passed as references in JavaScript instead of values, I of course knew that amd I also
    knew about the spread operator {...} that creates a deep copy of the object. But what I didn't know was that, the spread operator only copies the original object and its properties,
    but the nested objects are still passed as references. So after each ,move I would update the boardMap and often times it would result in strange behaviors. For example, after playing
    the move 1. e4, the e2 square on the boardMap should be empty and on e4 there should be white pawn, or 'P'. The rest of the board should be unchanged. But after I called the function that
    updates the board, there would random pieces on random squares on the board, like a pawn on c4 or an extra black king on e6. I could not for the life of me figure out what was going wrong
    and it was driving me insane. So after about 5 days of pulling my hair out, I finally came to the solution. A simple JSON.parse(JSON.stringify(boardMap)) solved the bug as it deep clones
    the object. I love JavaScript!`,

      `Other than that the rest of the process went fairly smoothly. I have used brute force solutions for most of my validation checks and I think they could be made more elegant/efficient. Though
    I am not too worried about optimization because in the worst of cases, the workload is extremely low (usually 8 or less iterations)`,

      `The Chess programming rabbit hole goes quite deep and what I have done here is trivial and merely scratching the surface. However my learnings from this project was immense. I still have the idea of
    creating a Chess engine of my own and I plan to do it in either Go or Rust. I strongly believe Chess ptogramming has something for everyone no matter what their domain is`,
    ],
  },
  limitations: {
    heading: `Drawbacks of the library`,
    text: [
      `There are two drawbacks of this project that I would like to address.`,

      `1. There is a square background behind a piece when dragging it. It makes it look really ugly and I cannot get rid of it. I have tried a few solitions like
    adding a ghost element while dragging the piece and removing it when dropped, but it did not seem to work. I would really appreciate some help for getting rid
    of the background color when dragging.`,

      `2. The drag and drop is only available for desktop devices and not mobile devices, as drag and drop API does not work for mobile devices. I experimented with the
    touch events for mobile, but could not make it work similarly to the desktop's drag and drop version. I somewhat got rid of this limitation by enabling click events
    but would like to make the drag and drops work in mobile screens as well. Maybe another challange to add to my future plans!`,
    ],
  },
  plans: {
    heading: `Future plans`,
    text: `I have a few plans ready for the future regarding this project, They are:
    1. I want to create a new component that lets users play a game of Chess. That would be built on the <analysis-board> component. For that
    I need to create a customizable Chess clock and a sofisticated solution for detecting checkmate and stalemates
    
    2. Once that is done, I can start building a new component with custom fairy pieces and rules (any r/AnarchyChess member here??) Since I already
    have a system ready for validations and game rules, it should not that difficult especially for pieces that combine other pieces (like the Knook,
    which combines the Rook and the Knight, whose validators already exist)
    
    3. Get rid of the current limitations (like no drag and drop on mobile)
    
    4. And finally if all goes well, I can launch my own trillion dollar Chess start up powered by CheeseJS and hope Chess.com acquires it for one Morbillion
    dollar so that I can safely buy a few rockets from Elon and yeet myself out of this solar system to explore the Milky Way. It's a bit far fetched but I like to
    think positive!`,
  },
};

export default Info;
