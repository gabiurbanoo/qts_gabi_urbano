import { assert, assertEquals, assertNotEquals, assertStringIncludes, assertThrows } from "https://deno.land/std@0.217.0/assert/mod.ts";

let x = "maçã";
let y = "banana";
let z = "maçã, laranja, banana";
let w = () => {
    throw new Error("Erro esperado!");
};

Deno.test("Teste com assert", () => {
    assert(x === "banana", "A variável 'x' não é 'banana'");
    console.log(`Teste passou! '${x}' é igual a 'maçã'`);
});

Deno.test("Teste com assertEquals", () => {
    assertEquals(y, "banana", "A variável 'y' deveria ser 'banana'");
    console.log(`Teste passou! '${y}' é igual a 'banana'`);
});

Deno.test("Teste com assertNotEquals", () => {
    assertNotEquals(x, "maçã", "A variável 'x' não pode ser igual a 'maçã'");
    console.log(`Teste passou! '${x}' e '${y}' são diferentes`);
});

Deno.test("Teste com assertStringIncludes", () => {
    assertStringIncludes(z, "maçã", "A string 'z' deveria conter 'maçã'");
    console.log(`Teste passou! '${z}' contém 'maçã'`);
});

Deno.test("Teste com assertThrows", () => {
    assertThrows(w, Error, "Erro esperado!", "A função deveria lançar um erro");
    console.log("Teste passou! A função lançou o erro esperado.");
});
