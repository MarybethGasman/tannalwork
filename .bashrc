tannapi() {
    sh -c 'cd projects/tannapi/ && deno run --allow-net --allow-env --allow-read --watch main.ts'
}
tannal() {
    sh -c 'cd projects/tannal/ && deno run --allow-net --allow-env --allow-read --watch main.ts'
}
lexer() {
    sh -c 'cd projects/lexer/ && gcc lexer.c main.c -o lexer -g && ./lexer'
}
somej() {
    cd projects/somej/
    javac *.java
}
cdp() {
    cd projects/$1
}
ws() {
    cd ~/tannalwork
}
vj() {
    node test.cjs < sample1.in > sample1.out && diff sample1.out sample1.ans
}