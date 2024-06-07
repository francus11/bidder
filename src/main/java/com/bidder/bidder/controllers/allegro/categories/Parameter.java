package com.bidder.bidder.controllers.allegro.categories;

import java.util.List;
import java.util.Optional;

import javax.swing.text.html.Option;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Parameter {
    private String id;
    private String name;
    private String type;
    private boolean required;
    private String requiredIf;
    private String displayedIf;
    private String unit;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Optional<List<DictionaryEntry>> dictionary;
    private Optional<Restrictions> restrictions;

    // konstruktor, gettery i settery

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class DictionaryEntry {
        private String id;
        private String value;
        private List<String> dependsOnValueIds;

        // konstruktor, gettery i settery
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public static class Restrictions {
        private Optional<Boolean> multipleChoices;
        private Optional<Integer> minChoices;
        private Optional<Integer> maxChoices;
        private Optional<Integer> minItems;
        private Optional<Integer> maxItems;
        private Optional<Integer> minLength;
        private Optional<Integer> maxLength;
        private Optional<Double> minValue;
        private Optional<Double> maxValue;
        private Optional<Boolean> allowEmpty;

        // konstruktor, gettery i settery
    }

    // konstruktor, gettery i settery
}
