import enchant 

def correct_spelling(word):
    #crie um dicionário para o idioma inglês
    dictionary = enchant.Dict("en_US")

    # se a palavra estiver escrita corretamente, devolva-a
    if dictionary.check(word):
        return word
    # caso contrário, ofereça sugestões de ortografia correta
    else:
        suggestions = dictionary.suggest(word)
        print(f"Did you mean any of these words instead of '{word}'?")
        for i in suggestions:
            print(i)
        return suggestions[0] # retornando a primeira palavra sugerida


def correct_spelling_sentence(sentence):
    #dividindo a frase em palavras individuais
    words = sentence.split()
    corrected_words = []

    # iterando cada palavra e corrigindo sua ortografia
    for word in words:
        corrected_word = correct_spelling(word)
        corrected_words.append(corrected_word)

    # juntando as palavras corrigidas novamente em uma frase
    corrected_sentence = ' '.join(corrected_words)
    return corrected_sentence


if __name__ == "__main__":
    # exemplo de uso
    sentence = "I went to the theater"
    corrected_sentence = correct_spelling_sentence(sentence)
    print(f"The corrected sentence is: {corrected_sentence}")
        
        