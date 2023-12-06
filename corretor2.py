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
        print(f"Você quis dizer alguma dessas opalavras em vez de '{word}'?")
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

def get_user_option():
    while True:
        print("\nPor favor escolha uma opção:")
        print("1. Corrija uma frase")
        print("2. Corrija um parágrafo")
        print("3. Sair")

        try:
            option = int(input())
            if option < 1 or option > 3:
                print("Opção inválida. Por favor, tente novamente.")
            else:
                return option
        except ValueError:
            print("Entrada inválida. Por favor, coloque um numero.")

def correct_user_input(option):
    if option == 1:
        sentence = input("Digite a frase que deseja corrigir: ")
        corrected_sentence = correct_spelling_sentence(sentence)
        print(f"\nCorrected sentence: {corrected_sentence}")
    elif option == 2:
        paragraph = input("Digite o parágrafo que deseje corrigir: ")
        sentences = paragraph.split('.')
        corrected_sentences = []
        for sentence in sentences:
            corrected_sentence = correct_spelling_sentence(sentence)
            corrected_sentences.append(corrected_sentence)
        corrected_paragraph = '. '.join(corrected_sentences)
        print(f"\nCorrected paragraph: {corrected_paragraph}")
    else:
        print("Exiting...")
if __name__ == "__main__":
    while True:
        option = get_user_option()
        if option == 3:
            break
        else:
            correct_user_input(option)